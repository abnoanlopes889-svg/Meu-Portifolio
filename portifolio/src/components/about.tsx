// src/components/About.tsx
import { Code2, Cpu, Globe, User } from "lucide-react";

export default function About() {
  // Lista de tecnologias para exibir de forma bonita
  const skills = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "Git & GitHub",
    "HTML5 & CSS3",
    "Responsive Design",
  ];

  return (
    <section id="sobre" className="py-24 px-6 max-w-7xl mx-auto">
      
      {/* Título da Seção */}
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100 flex items-center gap-2">
          <User className="text-purple-400" size={32} />
          Sobre Mim
        </h2>
        <p className="text-slate-400 mt-2 text-sm sm:text-base">
          Conheça um pouco mais da minha trajetória e das tecnologias que utilizo.
        </p>
      </div>

      {/* Grid de Conteúdo (2 Colunas) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Coluna da Esquerda: História / Bio */}
        <div className="space-y-4 text-slate-300 leading-relaxed">
          <p>
            Olá! Sou um desenvolvedor apaixonado por transformar ideias em aplicações web reais, funcionais e com excelente experiência de usuário. Minha jornada na tecnologia é impulsionada pela curiosidade e pela busca constante por código limpo e escalável.
          </p>
          <p>
            Atualmente, foco meus estudos e projetos no ecossistema moderno do React, utilizando <strong className="text-purple-400 font-semibold">Next.js</strong> para construir aplicações rápidas e otimizadas, e <strong className="text-purple-400 font-semibold">Tailwind CSS</strong> para dar vida a interfaces modernas e responsivas.
          </p>
          <p>
            Estou sempre em busca de novos desafios, aprendendo novas ferramentas e pronto para colaborar em equipes que valorizam inovação e qualidade de código.
          </p>
        </div>

        {/* Coluna da Direita: Habilidades (Tech Stack) */}
        <div className="bg-slate-900/50 border border-slate-800/80 p-6 sm:p-8 rounded-2xl backdrop-blur-sm">
          <h3 className="text-xl font-semibold text-slate-100 mb-6 flex items-center gap-2">
            <Cpu className="text-purple-400" size={22} />
            Tecnologias & Habilidades
          </h3>

          {/* Tags de Skills */}
          <div className="flex flex-wrap gap-2.5">
            {skills.map((skill, index) => (
              <span 
                key={index}
                className="px-3.5 py-2 text-sm font-medium text-purple-300 bg-purple-500/10 border border-purple-500/20 rounded-lg hover:bg-purple-500/20 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}
