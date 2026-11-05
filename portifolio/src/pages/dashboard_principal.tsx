"use client";

import { useState } from "react";
import { 
  LayoutDashboard, 
  User, 
  FolderGit2, 
  Briefcase, 
  Mail, 
  GitBranch, 
  Link 
} from "lucide-react";

// Importação dos componentes visuais que criamos
import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import Experience from "@/components/experiencia";
import Contact from "@/components/contact";

export default function DashboardLayout() {
  // Estado que guarda qual aba está selecionada
  const [activeTab, setActiveTab] = useState<string>("overview");

  // Lista de itens do menu da barra lateral
  const menuItems = [
    { id: "overview", label: "Visão Geral", icon: LayoutDashboard },
    { id: "about", label: "Sobre Mim", icon: User },
    { id: "projects", label: "Meus Projetos", icon: FolderGit2 },
    { id: "experience", label: "Trajetória", icon: Briefcase },
    { id: "contact", label: "Contato", icon: Mail },
  ];

  return (
    <div className="flex h-screen bg-slate-950 text-slate-100 overflow-hidden">
      
      {/* -------------------------------------------------------------
          1. BARRA LATERAL (SIDEBAR)
      ------------------------------------------------------------- */}
      <aside className="w-64 bg-slate-900/60 border-r border-slate-800 flex flex-col justify-between p-4 md:flex">
        <div>
          {/* Topo da Sidebar / Perfil do Desenvolvedor */}
          <div className="flex items-center gap-3 px-3 py-4 mb-6 border-b border-slate-800/80">
            <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center font-bold text-white shadow-lg shadow-purple-600/30">
              SN
            </div>
            <div>
              <h2 className="text-sm font-semibold text-slate-100">[Abnoan Lopes]</h2>
              <span className="text-xs text-purple-400 font-medium">Dev Full-Stack</span>
            </div>
          </div>

          {/* Menu de Navegação do Dashboard */}
          <nav className="space-y-1.5">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? "bg-purple-600/20 text-purple-300 border border-purple-500/30 shadow-sm"
                      : "text-slate-400 hover:bg-slate-800/50 hover:text-slate-200"
                  }`}
                >
                  <Icon size={18} className={isActive ? "text-purple-400" : "text-slate-400"} />
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Rodapé da Sidebar / Links Diretos */}
        <div className="pt-4 border-t border-slate-800/80 flex items-center justify-around text-slate-400">
          <a href="https://github.com/seu-usuario" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
            <GitBranch size={18} />
          </a>
          <a href="https://linkedin.com/in/seu-usuario" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
            <Link size={18} />
          </a>
        </div>
      </aside>

      {/* -------------------------------------------------------------
          2. ÁREA PRINCIPAL DO DASHBOARD (MAIN CONTENT)
      ------------------------------------------------------------- */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        
        {/* Cabeçalho Superior do Dashboard */}
        <header className="h-16 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs font-medium text-slate-300">Dashboard de Controle</span>
          </div>

          <div className="text-xs text-slate-400 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-full">
            Next.js + Tailwind CSS
          </div>
        </header>

        {/* Conteúdo Dinâmico (Alterna conforme a aba selecionada) */}
        <main className="flex-1 overflow-y-auto p-6 md:p-10">
          <div className="max-w-6xl mx-auto">
            {activeTab === "overview" && (
              <div className="space-y-12">
                <Hero />
                <Projects />
              </div>
            )}
            {activeTab === "about" && <About />}
            {activeTab === "projects" && <Projects />}
            {activeTab === "experience" && <Experience />}
            {activeTab === "contact" && <Contact />}
          </div>
        </main>

      </div>

    </div>
  );
}
