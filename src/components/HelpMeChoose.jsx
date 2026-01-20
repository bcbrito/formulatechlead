
import React from 'react';
import { motion } from 'framer-motion';
import { Check, HelpCircle, UserCheck, Briefcase, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HelpMeChoose = () => {
  const profiles = [
    {
      icon: Briefcase,
      title: "Quero me preparar para uma Liderança Futura",
      description: "Você é Sênior ou Tech Lead iniciante e quer estruturar sua base de conhecimento em grupo.",
      recommendation: "Fórmula Tech Lead",
      color: "bg-blue-100 text-blue-700",
      targetId: "produto-formula"
    },
    {
      icon: Zap,
      title: "Preciso passar em uma Entrevista Agora",
      description: "Você já tem uma entrevista marcada ou está aplicando ativamente para vagas de Tech Lead.",
      recommendation: "Interview Tech Lead",
      color: "bg-purple-100 text-purple-700",
      targetId: "produto-interview"
    },
    {
      icon: UserCheck,
      title: "Já sou Líder e quero Aceleração Máxima",
      description: "Você precisa de acompanhamento individual, personalizado e profundo para desafios complexos.",
      recommendation: "Consultoria Individual",
      color: "bg-emerald-100 text-emerald-700",
      targetId: "produto-ci"
    }
  ];

  const scrollToProduct = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="escolha-ideal" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-semibold mb-4">
            <HelpCircle className="inline-block w-4 h-4 mr-2 mb-0.5" />
            Qual o seu momento atual?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Descubra o Programa Ideal para Você
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Identifique seu perfil abaixo e veja qual solução trará o maior retorno para sua carreira neste momento.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {profiles.map((profile, index) => {
            const Icon = profile.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToProduct(profile.targetId)}
                className="group cursor-pointer bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${profile.color}`}>
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 h-14 flex items-center">
                  {profile.title}
                </h3>
                <p className="text-slate-600 mb-8 h-20">
                  {profile.description}
                </p>
                
                <div className="border-t border-slate-200 pt-6">
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-2">Recomendação:</p>
                  <p className="text-lg font-bold text-slate-900 flex items-center group-hover:text-blue-600 transition-colors">
                    {profile.recommendation}
                    <Check className="ml-2 w-5 h-5" />
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default HelpMeChoose;
