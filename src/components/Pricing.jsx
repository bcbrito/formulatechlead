
import React from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, Calendar, Users, Video, BookOpen, MessageSquare, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Pricing = () => {
  const benefits = [
    {
      icon: Video,
      text: 'Sessões de mentoria 1:1 personalizadas'
    },
    {
      icon: BookOpen,
      text: 'Acesso ao conteúdo exclusivo e frameworks'
    },
    {
      icon: Users,
      text: 'Networking com outros Tech Leads'
    },
    {
      icon: MessageSquare,
      text: 'Suporte direto durante todo o programa'
    },
    {
      icon: Calendar,
      text: 'Acompanhamento de progresso e ajustes'
    },
    {
      icon: Award,
      text: 'Certificado de conclusão'
    }
  ];

  const handleRedirect = () => {
    window.location.href = 'https://www.instagram.com/brunocaetanobrito/';
  };

  return (
    <section id="investimento" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold mb-4">
            Investimento
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Invista no Seu Futuro
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Um investimento estratégico na sua carreira que pode transformar completamente sua trajetória profissional
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-blue-200"
          >
            {/* Header with gradient */}
            <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 p-8 md:p-12 text-white text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400 rounded-full blur-3xl opacity-20"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-blue-500/30 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                  <Sparkles size={20} />
                  <span className="font-semibold">Programa Completo</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-bold mb-4">
                  Fórmula Tech Lead
                </h3>
                <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                  Mentoria personalizada para acelerar sua carreira e alcançar seus objetivos como líder técnico
                </p>
                
                {/* Price Removed */}
                <p className="text-blue-100 font-semibold text-xl">Valores e Planos sob Aplicação</p>
              </div>
            </div>

            {/* Benefits */}
            <div className="p-8 md:p-12">
              <h4 className="text-2xl font-bold text-slate-900 mb-8 text-center">
                O que está incluído
              </h4>
              
              <div className="grid md:grid-cols-2 gap-4 mb-10">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="flex items-start gap-4 p-4 rounded-xl hover:bg-blue-50 transition-colors"
                    >
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="text-blue-600" size={20} />
                      </div>
                      <div>
                        <p className="text-slate-700 font-medium">{benefit.text}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Value Proposition */}
              <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-8 mb-8">
                <h5 className="text-xl font-bold text-slate-900 mb-4 text-center">
                  Por que este investimento vale a pena?
                </h5>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Check className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                    <p className="text-slate-700">
                      <strong>ROI Rápido:</strong> O aumento salarial de um Tech Lead pode facilmente superar o investimento
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                    <p className="text-slate-700">
                      <strong>Economia de Tempo:</strong> Acelere anos de aprendizado por tentativa e erro
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                    <p className="text-slate-700">
                      <strong>Networking Valioso:</strong> Conexões e relacionamentos que duram toda a carreira
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                    <p className="text-slate-700">
                      <strong>Conhecimento Comprovado:</strong> Metodologias e frameworks testados em centenas de casos
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <Button
                onClick={handleRedirect}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-lg py-8 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <span className="flex items-center justify-center gap-2">
                  <Sparkles size={20} />
                  Garantir Minha Vaga Agora
                </span>
              </Button>

              <p className="text-center text-slate-500 text-sm mt-6">
                Vagas limitadas para garantir qualidade e atenção personalizada
              </p>
            </div>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 grid md:grid-cols-3 gap-6 text-center"
          >
            <div className="bg-white p-6 rounded-xl shadow-md">
              <p className="text-3xl font-bold text-blue-600 mb-2">100%</p>
              <p className="text-slate-600">Foco em Resultados</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <p className="text-3xl font-bold text-blue-600 mb-2">1:1</p>
              <p className="text-slate-600">Mentoria Personalizada</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <p className="text-3xl font-bold text-blue-600 mb-2">Exclusivo</p>
              <p className="text-slate-600">Turmas Limitadas</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
