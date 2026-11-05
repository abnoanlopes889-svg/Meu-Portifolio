"use client";


import { Mail, Send, CodeXml, ExternalLink, MessageSquare } from "lucide-react";

export default function Contact() {
  return (
    <section id="contato" className="py-24 px-6 max-w-7xl mx-auto">
      
      {/* Título da Seção */}
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100 flex items-center gap-2">
          <MessageSquare className="text-purple-400" size={32} />
          Vamos Conversar?
        </h2>
        <p className="text-slate-400 mt-2 text-sm sm:text-base text-center">
          Tem uma oportunidade, projeto ou quer apenas trocar uma ideia? Entre em contato!
        </p>
      </div>

      {/* Grid de Duas Colunas */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Coluna da Esquerda: Informações e Redes */}
        <div className="space-y-8">
          <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl backdrop-blur-sm space-y-6">
            <h3 className="text-xl font-semibold text-slate-100">
              Informações de Contato
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Estou sempre aberto a novos desafios e parcerias. Sinta-se à vontade para enviar um e-mail ou se conectar comigo nas redes sociais.
            </p>

            {/* E-mail */}
            <div className="flex items-center gap-4 text-slate-300">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                <Mail size={22} />
              </div>
              <div>
                <span className="text-xs text-slate-400 block">E-mail</span>
                <span className="text-sm font-medium text-slate-100">seu-email@exemplo.com</span>
              </div>
            </div>

            {/* Redes Sociais */}
            <div className="pt-4 border-t border-slate-800 flex gap-4">
              <a 
                href="https://github.com/seu-usuario" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-purple-600/20 hover:text-purple-400 border border-slate-700 flex items-center justify-center text-slate-300 transition-colors"
              >
                <CodeXml size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/seu-usuario" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-purple-600/20 hover:text-purple-400 border border-slate-700 flex items-center justify-center text-slate-300 transition-colors"
              >
                <ExternalLink size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Coluna da Direita: Formulário de Contato */}
        <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl backdrop-blur-sm">
          <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Seu Nome
              </label>
              <input 
                type="text" 
                placeholder="Ex: Maria Silva"
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-purple-500 transition-colors text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Seu E-mail
              </label>
              <input 
                type="email" 
                placeholder="Ex: maria@exemplo.com"
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-purple-500 transition-colors text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Sua Mensagem
              </label>
              <textarea 
                rows={4}
                placeholder="Escreva sua mensagem aqui..."
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-purple-500 transition-colors text-sm resize-none"
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3.5 font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-all shadow-lg shadow-purple-600/20 cursor-pointer"
            >
              Enviar Mensagem
              <Send size={16} />
            </button>
          </form>
        </div>

      </div>

    </section>
  );
}
