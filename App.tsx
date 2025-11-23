import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { TagViewer } from './components/TagViewer';
import { htmlTopics } from './data/topics';
import { HtmlTag } from './types';
import { Menu, X, Github, Search } from 'lucide-react';

const App: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<HtmlTag>(htmlTopics[0]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="min-h-screen flex flex-col lg:flex-row font-sans text-slate-200 bg-[#0f172a] selection:bg-blue-500/30">
      
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-slate-900/80 backdrop-blur border-b border-white/10 z-30 flex items-center justify-between px-4 gap-4">
        <div className="flex items-center gap-3 shrink-0">
            <button 
                onClick={() => setIsSidebarOpen(true)}
                className="p-2 -ml-2 text-slate-400 hover:text-white"
            >
                <Menu />
            </button>
            <span className="font-bold text-lg bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent hidden sm:block">HTML Master</span>
        </div>

        {/* Mobile Search Bar */}
        <div className="flex-1 max-w-md relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={14} className="text-slate-500 group-focus-within:text-blue-400 transition-colors" />
            </div>
            <input 
                type="text" 
                placeholder="Buscar etiqueta..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-800/50 border border-white/10 rounded-full py-1.5 pl-9 pr-4 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500/50 focus:bg-slate-800 transition-all"
            />
        </div>
      </div>

      <Sidebar 
        onSelectTag={setSelectedTag} 
        selectedTag={selectedTag} 
        isOpen={isSidebarOpen}
        onCloseMobile={() => setIsSidebarOpen(false)}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

      {/* Main Content Area */}
      <main className="flex-1 lg:ml-0 pt-20 lg:pt-0 min-h-screen relative overflow-hidden">
        
        {/* Ambient Background Effects */}
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
            <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] animate-blob"></div>
            <div className="absolute bottom-[-10%] left-[20%] w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative z-10 p-6 lg:p-12 max-w-7xl mx-auto">
            <TagViewer tag={selectedTag} />
            
            <footer className="mt-20 pt-8 border-t border-white/5 text-center text-slate-500 text-sm">
                <p className="flex items-center justify-center gap-2">
                    Hecho con <span className="text-red-500">♥</span> y React + Gemini
                </p>
                <div className="mt-4 flex justify-center gap-4">
                    <a href="#" className="hover:text-white transition-colors"><Github size={20} /></a>
                </div>
            </footer>
        </div>

        {/* Close Button for Sidebar on Mobile (when open) */}
        {isSidebarOpen && (
             <button 
                onClick={() => setIsSidebarOpen(false)}
                className="lg:hidden fixed top-4 right-4 z-50 p-2 bg-slate-800 rounded-full text-white shadow-lg border border-white/10"
             >
                 <X size={20} />
             </button>
        )}
      </main>
    </div>
  );
};

export default App;