// src/data/projectsData.ts

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
}

export const projectsData: Project[] = [
  {
    id: "1",
    title: "Portfólio Profissional",
    description: "Um portfólio moderno e responsivo desenvolvido com Next.js, TypeScript e Tailwind CSS para destacar experiências e projetos.",
    image: "/images/projeto1.png", // Coloque o caminho da imagem na pasta public
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/seu-usuario/seu-portfolio",
    liveUrl: "https://seu-portfolio.vercel.app",
  },
  {
    id: "2",
    title: "Aplicação de Gestão de Tarefas",
    description: "Sistema completo de lista de tarefas com recursos de CRUD, filtros por status e armazenamento local para organização diária.",
    image: "/images/projeto2.png",
    tags: ["React", "JavaScript", "Tailwind CSS"],
    githubUrl: "https://github.com/seu-usuario/task-manager",
    liveUrl: "https://task-manager-demo.vercel.app",
  },
  // Adicione mais projetos aqui conforme for criando!
];
