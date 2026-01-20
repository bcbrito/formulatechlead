import React from 'react';
import { motion } from 'framer-motion';
import { Code, Users, Lightbulb, TrendingUp, BookOpen, MessageSquare } from 'lucide-react';

const ProgramOverview = () => {
  const features = [
    {
      icon: Code,
      title: 'Liderança Técnica',
      description: 'Desenvolva habilidades essenciais para liderar equipes de tecnologia com excelência'
    },
    {
      icon: Users,
      title: 'Gestão de Equipes',
      description: 'Aprenda a gerenciar, motivar e desenvolver times de alto desempenho'
    },
    {
      icon: Lightbulb,
      title: 'Estratégia & Visão',
      description: 'Construa uma visão estratégica e tome decisões que impactam o negócio'
    },
    {
      icon: TrendingUp,
      title: 'Crescimento de Carreira',
      description: 'Acelere sua evolução profissional com planejamento e execução'
    },
    {
      icon: BookOpen,
      title: 'Conteúdo Exclusivo',
      description: 'Acesso a materiais, frameworks e metodologias comprovadas'
    },
    {
      icon: MessageSquare,
      title: 'Mentoria 1:1',
      description: 'Sessões individuais personalizadas para seus desafios específicos'
    }
  ];

  return (
    <section id="programa" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            O Programa
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            O que é o Fórmula Tech Lead?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Um programa completo de mentoria focado em desenvolver líderes técnicos de alta performance. 
            Aqui você aprende não apenas as habilidades técnicas, mas também as competências de liderança, 
            gestão e estratégia necessárias para se destacar como Tech Lead.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Metodologia Comprovada</h3>
              <p className="text-blue-100 leading-relaxed mb-6">
                Nossa abordagem combina teoria e prática, com foco em aplicação real no seu dia a dia. 
                Através de casos práticos, exercícios e feedback contínuo, você desenvolve as competências 
                necessárias para ser um líder técnico excepcional.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-blue-500/30 backdrop-blur-sm rounded-full text-sm font-semibold">
                  Prática Real
                </span>
                <span className="px-4 py-2 bg-blue-500/30 backdrop-blur-sm rounded-full text-sm font-semibold">
                  Feedback Contínuo
                </span>
                <span className="px-4 py-2 bg-blue-500/30 backdrop-blur-sm rounded-full text-sm font-semibold">
                  Resultados Mensuráveis
                </span>
              </div>
            </div>
            <div className="relative">
              <img
                className="w-full h-[300px] object-cover rounded-xl shadow-2xl"
                alt="Tech team collaboration and leadership"
               src="https://images.unsplash.com/photo-1603201667141-5a2d4c673378" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramOverview;