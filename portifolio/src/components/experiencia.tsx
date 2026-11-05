// src/components/Experience.tsx
import { experiencesData } from "@/data/ExperienciaData";
import { Briefcase, GraduationCap } from "lucide-react";

export default function Experience() {
  return (
    <section id="experiencia" className="py-24 px-6 max-w-5xl mx-auto">
      
      {/* Título da Seção */}
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100 flex items-center gap-2">
          <Briefcase className="text-purple-400" size={32} />
          Experiência & Formação
        </h2>
        <p className="text-slate-400 mt-2 text-sm sm:text-base text-center">
          Minha trajetória profissional e acadêmica ao longo dos anos.
        </p>
      </div>

      {/* Linha do Tempo (Timeline) */}
      <div className="relative border-l border-slate-800 ml-4 sm:ml-32 space-y-12">
        {experiencesData.map((item) => (
          <div key={item.id} className="relative pl-8 sm:pl-10 group">
            
            {/* Ícone Indicador na Linha */}
            <div className="absolute -left-4.25 top-1 w-8 h-8 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-purple-400 group-hover:border-purple-500 group-hover:bg-purple-500/10 transition-colors">
              {item.type === "work" ? <Briefcase size={16} /> : <GraduationCap size={16} />}
            </div>

            {/* Período (Data) - No desktop fica elegante à esquerda da linha */}
            <div className="sm:absolute sm:-left-32 sm:top-1.5 sm:w-24 sm:text-right text-xs font-semibold text-purple-400 uppercase tracking-wider mb-1 sm:mb-0">
              {item.period}
            </div>

            {/* Conteúdo do Card */}
            <div className="bg-slate-900/50 border border-slate-800/80 p-6 rounded-2xl hover:border-purple-500/50 transition-all duration-300">
              <h3 className="text-xl font-semibold text-slate-100">
                {item.role}
              </h3>
              <p className="text-sm font-medium text-purple-300/80 mt-1">
                {item.company}
              </p>
              <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                {item.description}
              </p>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}
