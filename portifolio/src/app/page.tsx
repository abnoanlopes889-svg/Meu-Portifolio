// src/app/page.tsx
import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import Experience from "@/components/experiencia";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar"; // Opcional, caso queira o menu fixo no topo

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 selection:bg-purple-500 selection:text-white">
      {/* 1. Navbar Fixa no Topo (Opcional, para navegação suave) */}
      <Navbar />

      {/* 2. Seção Inicial / Impacto */}
      <div id="inicio">
        <Hero />
      </div>

      {/* 3. Seção Sobre Mim */}
      <div id="sobre">
        <About />
      </div>

      {/* 4. Seção de Projetos */}
      <div id="projetos">
        <Projects />
      </div>

      {/* 5. Seção de Experiência / Trajetória */}
      <div id="experiencia">
        <Experience />
      </div>

      {/* 6. Seção de Contato */}
      <div id="contato">
        <Contact />
      </div>

      {/* 7. Rodapé */}
      <Footer />
    </main>
  );
}
