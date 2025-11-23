import React, { useState, useEffect } from 'react';
import { HtmlTag } from '../types';
import { Play, Sparkles, RefreshCw, Copy, Check } from 'lucide-react';
import { generateExplanation, generateChallenge } from '../services/geminiService';

interface TagViewerProps {
  tag: HtmlTag;
}

export const TagViewer: React.FC<TagViewerProps> = ({ tag }) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
  const [aiContent, setAiContent] = useState<string | null>(null);
  const [aiLoading, setAiLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  // Reset AI content when tag changes
  useEffect(() => {
    setAiContent(null);
  }, [tag]);

  const handleAskAI = async () => {
    setAiLoading(true);
    const result = await generateExplanation(tag.name, tag.description);
    setAiContent(result);
    setAiLoading(false);
  };

  const handleChallenge = async () => {
    setAiLoading(true);
    const result = await generateChallenge(tag.name);
    // Rough extraction of code block if Gemini returns Markdown
    const codeMatch = result.match(/```html([\s\S]*?)```/);
    const cleanContent = codeMatch ? `<div class="p-4 bg-yellow-900/20 text-yellow-200 mb-4 rounded border border-yellow-700/50">🎯 <strong>Reto generado:</strong> Intenta replicar esto.</div>` + result.replace(/```html/g, '').replace(/```/g, '') : result;
    
    setAiContent(cleanContent);
    setAiLoading(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(tag.example.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const commonAttributes = [
    'class: Especifica una o más clases para vincular con hojas de estilo (CSS).',
    'id: Define un identificador único para el elemento en el documento.',
    'style: Permite especificar estilos CSS en línea directamente en el elemento.',
    'title: Proporciona información adicional (tooltip) al pasar el cursor.',
    'hidden: Indica que el elemento no es relevante y debe ocultarse.'
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
      
      {/* Header Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest border border-blue-500/20">
                {tag.category}
            </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white font-mono tracking-tight">
          <span className="text-blue-500">&lt;</span>
          {tag.name.replace(/[<>]/g, '')}
          <span className="text-blue-500">/&gt;</span>
        </h1>
        <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
          {tag.description}
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Left Column: Theory & Info */}
        <div className="space-y-6">
            
            {/* Syntax Card */}
            <div className="glass-panel rounded-2xl p-6 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-500/20 transition-all duration-500"></div>
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <span className="w-1 h-6 bg-blue-500 rounded-full"></span>
                    Sintaxis
                </h3>
                <div className="bg-slate-950/50 rounded-lg p-4 font-mono text-sm text-blue-300 border border-white/5 shadow-inner">
                    <pre className="whitespace-pre-wrap">{tag.syntax}</pre>
                </div>
            </div>

            {/* Usage & Attributes */}
            <div className="glass-panel rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <span className="w-1 h-6 bg-purple-500 rounded-full"></span>
                    Uso y Atributos
                </h3>
                <p className="text-slate-400 mb-4">{tag.usage}</p>
                {tag.attributes && (
                    <ul className="space-y-2">
                        {tag.attributes.map((attr, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0"></div>
                                <span dangerouslySetInnerHTML={{ __html: attr.replace(/^([^:]+):/, '<code class="text-purple-300 font-bold bg-purple-900/30 px-1 rounded">$1</code>') }} />
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Common Attributes */}
            <div className="glass-panel rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <span className="w-1 h-6 bg-pink-500 rounded-full"></span>
                    Atributos Comunes
                </h3>
                <p className="text-slate-400 mb-4 text-sm">
                    Estos atributos globales funcionan en casi todas las etiquetas.
                </p>
                <ul className="space-y-2">
                    {commonAttributes.map((attr, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-pink-400 shrink-0"></div>
                            <span dangerouslySetInnerHTML={{ __html: attr.replace(/^([^:]+):/, '<code class="text-pink-300 font-bold bg-pink-900/30 px-1 rounded">$1</code>') }} />
                        </li>
                    ))}
                </ul>
            </div>

             {/* AI Actions */}
            <div className="glass-panel rounded-2xl p-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/20">
                <div className="flex gap-2 p-4">
                    <button 
                        onClick={handleAskAI}
                        disabled={aiLoading}
                        className="flex-1 py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-sm font-semibold transition-all flex items-center justify-center gap-2 group border border-white/5"
                    >
                        {aiLoading ? <RefreshCw className="animate-spin" size={16} /> : <Sparkles className="text-yellow-400 group-hover:scale-110 transition-transform" size={16} />}
                        Explícamelo mejor
                    </button>
                    <button 
                        onClick={handleChallenge}
                        disabled={aiLoading}
                        className="flex-1 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-900/20"
                    >
                        {aiLoading ? <RefreshCw className="animate-spin" size={16} /> : <Play size={16} fill="currentColor" />}
                        Dame un reto
                    </button>
                </div>
                
                {aiContent && (
                    <div className="px-5 pb-5 animate-fade-in">
                        <div className="bg-slate-900/80 rounded-lg p-4 text-sm text-slate-300 border border-white/10 leading-relaxed">
                             <div className="flex items-center gap-2 mb-3 text-purple-300 font-bold text-xs uppercase tracking-wider">
                                <Sparkles size={12} /> Respuesta Gemini AI
                             </div>
                             <div dangerouslySetInnerHTML={{ __html: aiContent }} />
                        </div>
                    </div>
                )}
            </div>
        </div>

        {/* Right Column: Interactive Example */}
        <div className="space-y-6">
            <div className="sticky top-24">
                <div className="bg-slate-900 rounded-2xl border border-slate-700 overflow-hidden shadow-2xl shadow-black/50 ring-1 ring-white/10">
                    
                    {/* Window Controls */}
                    <div className="bg-slate-800 px-4 py-3 flex items-center justify-between border-b border-slate-700">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                        </div>
                        <div className="flex bg-slate-950/50 rounded-lg p-1 text-xs font-medium">
                            <button 
                                onClick={() => setActiveTab('preview')}
                                className={`px-3 py-1 rounded transition-colors ${activeTab === 'preview' ? 'bg-slate-700 text-white' : 'text-slate-500 hover:text-slate-300'}`}
                            >
                                Preview
                            </button>
                            <button 
                                onClick={() => setActiveTab('code')}
                                className={`px-3 py-1 rounded transition-colors ${activeTab === 'code' ? 'bg-slate-700 text-white' : 'text-slate-500 hover:text-slate-300'}`}
                            >
                                Código
                            </button>
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="relative h-[400px] bg-white">
                        {activeTab === 'preview' ? (
                            <div className="w-full h-full p-6 overflow-auto bg-slate-50 text-slate-900">
                                <div dangerouslySetInnerHTML={{ __html: tag.example.code }} />
                            </div>
                        ) : (
                            <div className="w-full h-full bg-[#1e1e1e] p-6 overflow-auto text-sm font-mono leading-relaxed relative group">
                                <button 
                                    onClick={handleCopy}
                                    className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-md text-white opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                    {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
                                </button>
                                <pre className="text-blue-300">
                                    {tag.example.code}
                                </pre>
                            </div>
                        )}
                    </div>
                    
                    {/* Footer Description */}
                    <div className="bg-slate-800 p-4 border-t border-slate-700">
                        <p className="text-sm text-slate-400">
                            <span className="text-blue-400 font-bold">Ejemplo: </span>
                            {tag.example.description}
                        </p>
                    </div>
                </div>
                
                {/* Decorative background blob */}
                <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/5 blur-3xl rounded-full"></div>
            </div>
        </div>
      </div>
    </div>
  );
};
