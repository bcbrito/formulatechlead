import React from 'react';
import { Mail, Linkedin } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
const Footer = () => {
  const {
    toast
  } = useToast();
  // Removed the generic handleClick as specific actions are now defined

  const handleEmailClick = () => {
    window.location.href = 'mailto:contato@formulatechlead.com.br';
  };

  const handleLinkedinClick = () => {
    window.location.href = 'https://www.linkedin.com/in/brunocaetanobrito/';
  };

  const scrollToSection = id => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <footer className="bg-slate-900 text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-4 block">Fórmula Tech Lead</span>
            <p className="text-slate-400 leading-relaxed">
              O ecossistema completo para acelerar sua carreira em liderança técnica. Do preparo para entrevistas à gestão de elite.
            </p>
          </div>

          {/* Links */}
          <div>
            <span className="font-bold text-lg mb-4 block">Navegação</span>
            <nav className="flex flex-col gap-2">
              <button onClick={() => scrollToSection('escolha-ideal')} className="text-slate-400 hover:text-blue-400 transition-colors text-left">
                Comece Aqui
              </button>
              <button onClick={() => scrollToSection('produtos')} className="text-slate-400 hover:text-blue-400 transition-colors text-left">
                Nossos Programas
              </button>
              <button onClick={() => scrollToSection('comparativo')} className="text-slate-400 hover:text-blue-400 transition-colors text-left">
                Comparativo
              </button>
              <button onClick={() => scrollToSection('mentor')} className="text-slate-400 hover:text-blue-400 transition-colors text-left">
                Mentor
              </button>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <span className="font-bold text-lg mb-4 block">Contato</span>
            <div className="flex flex-col gap-3">
              <button onClick={handleEmailClick} className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors">
                <Mail size={20} />
                <span>E-mail</span>
              </button>
              <button onClick={handleLinkedinClick} className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Fórmula Tech Lead. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;