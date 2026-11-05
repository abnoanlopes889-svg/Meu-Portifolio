// src/components/footer.tsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Mail, Heart } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setCurrentYear(new Date().getFullYear());
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Identidade / Marca */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Link href="#inicio" className="text-lg font-bold tracking-wider text-slate-100 hover:text-purple-400 transition-colors">
            &lt;SeuNome /&gt;
          </Link>
          <p className="text-slate-400 text-xs mt-1">
            Desenvolvedor Front-End • Criando experiências digitais com excelência.
          </p>
        </div>

        {/* Links Rápidos de Navegação */}
        <nav className="flex flex-wrap justify-center gap-6 text-xs text-slate-400 font-medium">
          <Link href="#inicio" className="hover:text-purple-400 transition-colors">Início</Link>
          <Link href="#sobre" className="hover:text-purple-400 transition-colors">Sobre</Link>
          <Link href="#projetos" className="hover:text-purple-400 transition-colors">Projetos</Link>
          <Link href="#experiencia" className="hover:text-purple-400 transition-colors">Experiência</Link>
          <Link href="#contato" className="hover:text-purple-400 transition-colors">Contato</Link>
        </nav>

        {/* Redes Sociais no Rodapé */}
        <div className="flex items-center gap-4 text-slate-400">
          <a 
            href="https://github.com/seu-usuario" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:text-purple-400 hover:border-purple-500/50 transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={18} />
          </a>
          <a 
            href="https://linkedin.com/in/seu-usuario" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:text-purple-400 hover:border-purple-500/50 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={18} />
          </a>
          <a 
            href="mailto:seu-email@exemplo.com" 
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:text-purple-400 hover:border-purple-500/50 transition-colors"
            aria-label="E-mail"
          >
            <Mail size={18} />
          </a>
        </div>

      </div>

      {/* Linha Divisória de Direitos Autorais */}
      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2 text-center sm:text-left">
        <p>
          ©{currentYear ? ` ${currentYear}` : ""} Desenvolvido com <Heart size={12} className="inline text-purple-500 fill-purple-500 mx-0.5" /> usando <span className="text-slate-300 font-medium">Next.js</span> e <span className="text-slate-300 font-medium">Tailwind CSS</span>.
        </p>
        <p>
          Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
