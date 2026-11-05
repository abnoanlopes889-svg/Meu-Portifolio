// src/components/Projects.tsx
import { projectsData } from "@/data/ProjectData";
import { FolderGit2, ExternalLink, GitBranch } from "lucide-react";

export default function Projects() {
  return (
    <section id="projetos" className="py-24 px-6 max-w-7xl mx-auto">
      
      {/* Título da Seção */}
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100 flex items-center gap-2">
          <FolderGit2 className="text-purple-400" size={32} />
          Projetos em Destaque
        </h2>
        <p className="text-slate-400 mt-2 text-sm sm:text-base text-center">
          Alguns dos principais trabalhos que desenvolvi aplicando tecnologias modernas.
        </p>
      </div>

      {/* Grid de Cards dos Projetos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <div 
            key={project.id}
            className="bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              {/* Imagem do Projeto (Simulada com div ou componente Image do Next) */}
              <div className="h-48 bg-slate-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-purple-600/10 group-hover:bg-transparent transition-colors z-10" />
                {/* Dica: Quando tiver a imagem real, use o componente <Image /> do Next.js */}
                <div className="flex items-center justify-center h-full text-slate-500 text-sm">
                  Preview do Projeto
                </div>
              </div>

              {/* Informações do Projeto */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-100 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags de Tecnologias */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-2.5 py-1 text-xs font-medium text-purple-300 bg-purple-500/10 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Links de Acesso (GitHub e Live Demo) */}
            <div className="px-6 py-4 bg-slate-950/40 border-t border-slate-800/80 flex items-center justify-between">
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-slate-300 hover:text-purple-400 transition-colors"
              >
                <GitBranch size={18} />
                Repositório
              </a>

              {project.liveUrl && (
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <ExternalLink size={18} />
                  Ver Deploy
                </a>
              )}
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}
