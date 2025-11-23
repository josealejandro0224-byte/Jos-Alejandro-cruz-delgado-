import React from 'react';
import { htmlTopics } from '../data/topics';
import { TopicCategory, HtmlTag } from '../types';
import { ChevronRight, Code2, Layout, Type, Image, Table, Database, Hash, Search, List, BookOpen, Terminal } from 'lucide-react';

interface SidebarProps {
  onSelectTag: (tag: HtmlTag) => void;
  selectedTag: HtmlTag | null;
  isOpen: boolean;
  onCloseMobile: () => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

const categoryIcons: Record<TopicCategory, React.ReactNode> = {
  [TopicCategory.BASICS]: <Code2 size={18} />,
  [TopicCategory.TEXT]: <Type size={18} />,
  [TopicCategory.LISTS]: <List size={18} />,
  [TopicCategory.STRUCTURE]: <Layout size={18} />,
  [TopicCategory.SEMANTICS]: <BookOpen size={18} />,
  [TopicCategory.MEDIA]: <Image size={18} />,
  [TopicCategory.FORMS]: <Database size={18} />,
  [TopicCategory.TABLES]: <Table size={18} />,
  [TopicCategory.PROGRAMMING]: <Terminal size={18} />,
};

export const Sidebar: React.FC<SidebarProps> = ({ 
  onSelectTag, 
  selectedTag, 
  isOpen, 
  onCloseMobile,
  searchTerm,
  onSearchChange
}) => {
  // Filter topics based on search term
  const filteredTopics = htmlTopics.filter(topic => 
    topic.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    topic.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Group filtered topics by category
  const categories = Object.values(TopicCategory).filter(cat => {
    // Only show categories that have topics
    return filteredTopics.some(t => t.category === cat);
  });

  const groupedTopics = categories.reduce((acc, category) => {
    const topicsInCategory = filteredTopics.filter(t => t.category === category);
    if (topicsInCategory.length > 0) {
      acc[category] = topicsInCategory;
    }
    return acc;
  }, {} as Record<TopicCategory, HtmlTag[]>);

  return (
    <>
      {/* Mobile Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onCloseMobile}
      />

      {/* Sidebar Container */}
      <aside 
        className={`fixed lg:sticky top-0 left-0 h-screen w-72 bg-slate-900/95 border-r border-white/10 overflow-hidden z-50 transition-transform duration-300 ease-in-out flex flex-col ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
      >
        {/* Header */}
        <div className="p-6 pb-4 bg-slate-900/95 z-10 shrink-0">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent flex items-center gap-2">
            <span className="text-3xl">&lt;/&gt;</span> HTML Master
          </h1>
          <p className="text-slate-400 text-xs mt-1">La guía definitiva.</p>
        </div>

        {/* Search Bar (Desktop/Sidebar specific) */}
        <div className="px-6 pb-4 shrink-0">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 transition-colors" size={16} />
            <input
              type="text"
              placeholder="Filtrar etiquetas..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full bg-slate-950/50 border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-sm text-slate-300 focus:outline-none focus:border-blue-500/50 focus:bg-slate-950 transition-all placeholder-slate-600"
            />
          </div>
        </div>

        {/* Scrollable Navigation */}
        <nav className="p-4 pt-0 space-y-6 overflow-y-auto flex-1 custom-scrollbar">
          {Object.keys(groupedTopics).length === 0 && (
            <div className="text-center py-10 text-slate-500">
              <p>No se encontraron resultados para "{searchTerm}"</p>
            </div>
          )}

          {categories.map((category) => {
            const topics = groupedTopics[category];
            if (!topics) return null;

            return (
              <div key={category} className="space-y-2 animate-fade-in">
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2 px-2 sticky top-0 bg-slate-900/95 py-2 z-10">
                  {categoryIcons[category]}
                  {category}
                </h3>
                <ul className="space-y-1">
                  {topics.map((tag) => (
                    <li key={tag.name}>
                      <button
                        onClick={() => {
                          onSelectTag(tag);
                          onCloseMobile();
                        }}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 flex items-center justify-between group ${
                          selectedTag?.name === tag.name
                            ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/50'
                            : 'text-slate-400 hover:bg-white/5 hover:text-white'
                        }`}
                      >
                        <span className="font-mono truncate">{tag.name}</span>
                        {selectedTag?.name === tag.name && <ChevronRight size={14} />}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </nav>
        
        {/* Footer */}
        <div className="p-6 mt-auto border-t border-white/5 shrink-0 bg-slate-900/95">
          <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 p-4 rounded-xl border border-white/10">
            <p className="text-xs text-purple-200 mb-2">✨ Potenciado por Gemini</p>
            <p className="text-xs text-slate-400">Pregunta si tienes dudas.</p>
          </div>
        </div>
      </aside>
    </>
  );
};