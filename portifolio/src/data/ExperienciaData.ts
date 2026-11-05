// src/data/experienceData.ts

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  company: string;
  description: string;
  type: "work" | "education"; // Para diferenciar trabalho de estudo, se quiser
}

export const experiencesData: ExperienceItem[] = [
  {
    id: "1",
    period: "2025 - Presente",
    role: "Desenvolvedor Front-End Freelancer",
    company: "Projetos Independentes",
    description: "Desenvolvimento de landing pages e aplicações web responsivas utilizando Next.js, React, TypeScript e Tailwind CSS, focando em performance e UI/UX.",
    type: "work",
  },
  {
    id: "2",
    period: "2024 - 2025",
    role: "Estudante de Desenvolvimento Web / Projetos Práticos",
    company: "Autodidata & Cursos Online",
    description: "Foco profundo em lógica de programação, ecossistema JavaScript moderno, versionamento de código com Git/GitHub e construção de projetos reais.",
    type: "education",
  },
  {
    id: "3",
    period: "2023 - Presente",
    role: "Graduação em [Sua Faculdade / Curso]",
    company: "[Nome da Instituição]",
    description: "Estudos voltados para fundamentos da computação, engenharia de software e resolução de problemas lógicos.",
    type: "education",
  },
];
