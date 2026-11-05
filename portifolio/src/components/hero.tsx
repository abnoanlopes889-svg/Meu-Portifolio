// src/components/Hero.tsx
import Link from "next/link";

const ArrowRight = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const Github = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.24-1.62-1.24-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.71 2.63 1.22 3.27.93.1-.72.39-1.22.71-1.5-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.12-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.29-2.62 5.23-5.11 5.51.4.35.76 1.02.76 2.06v3.05c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
  </svg>
);

const Linkedin = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.45H4.96V9h2.97v9.45ZM6.45 7.71a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Zm12 10.74h-2.97v-4.6c0-1.1-.02-2.52-1.54-2.52-1.54 0-1.78 1.2-1.78 2.44v4.68H9.19V9h2.85v1.29h.04c.4-.75 1.37-1.54 2.82-1.54 3.01 0 3.56 1.98 3.56 4.56v5.14Z" />
  </svg>
);

export default function Hero() {
  return (
    <section id="inicio" className="flex flex-col items-center justify-center min-h-[90vh] px-4 text-center pt-20">
      
      {/* Badge de boas-vindas opcional */}
      <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-sm rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
        <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
        Disponível para novos projetos
      </div>

      {/* Título Principal */}
      <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight max-w-3xl">
        Olá, eu sou o <span className="bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">[Seu Nome]</span>
      </h1>

      {/* Subtítulo / Slogan */}
      <p className="mt-6 text-lg sm:text-xl text-slate-400 max-w-xl">
        Desenvolvedor Front-End especializado em criar experiências web modernas, responsivas e de alta performance com Next.js e Tailwind.
      </p>

      {/* Botões de Ação (CTA) */}
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link 
          href="#projetos"
          className="flex items-center gap-2 px-6 py-3 font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-all shadow-lg shadow-purple-600/20"
        >
          Ver Projetos
          <ArrowRight />
        </Link>
        
        <Link 
          href="#contato"
          className="px-6 py-3 font-medium text-slate-300 bg-slate-900 border border-slate-800 rounded-lg hover:bg-slate-800 hover:text-white transition-all"
        >
          Fale Comigo
        </Link>
      </div>

      {/* Links rápidos para Redes Sociais */}
      <div className="mt-10 flex items-center gap-5 text-slate-400">
        <a href="https://github.com/seu-usuario" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
          <Github />
        </a>
        <a href="https://linkedin.com/in/seu-usuario" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
          <Linkedin />
        </a>
      </div>

    </section>
  );
}
