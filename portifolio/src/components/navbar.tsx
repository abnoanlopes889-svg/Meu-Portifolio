// src/components/Navbar.tsx
import Link from "next/link";
import { GitBranch, Link as LinkIcon } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 mx-auto max-w-7xl backdrop-blur-md bg-slate-950/75 border-b border-slate-800/50">
      
      {/* Identidade / Nome */}
      <Link href="#inicio" className="text-sm font-semibold text-slate-100 flex items-center gap-3 hover:text-purple-400 transition-colors">
        <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center font-bold text-white shadow-lg shadow-purple-600/30 text-xs">
          AL
        </div>
        <span>[Abnoan Lopes]</span>
      </Link>

      {/* Links de Navegação da Landing Page */}
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
        <Link href="#inicio" className="hover:text-purple-400 transition-colors">Início</Link>
        <Link href="#about" className="hover:text-purple-400 transition-colors">Sobre Mim</Link>
        <Link href="#projects" className="hover:text-purple-400 transition-colors">Projetos</Link>
        <Link href="#experience" className="hover:text-purple-400 transition-colors">Trajetória</Link>
        <Link href="#contact" className="hover:text-purple-400 transition-colors">Contato</Link>
      </nav>

      {/* Redes Sociais no Topo */}
      <div className="flex items-center gap-4 text-slate-400">
        <a href="https://github.com/seu-usuario" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
          <GitBranch size={18} />
        </a>
        <a href="https://linkedin.com/in/seu-usuario" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
          <LinkIcon size={18} />
        </a>
      </div>

    </header>
  );
}
