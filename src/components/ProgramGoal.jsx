import React from 'react';
import { motion } from 'framer-motion';
import { Target, Rocket, Map, Trophy, Star, Zap } from 'lucide-react';

const ProgramGoal = () => {
  const goals = [
    {
      icon: Target,
      title: 'Clareza de Objetivos',
      description: 'Defina com precisão onde você quer chegar e trace o caminho mais eficiente'
    },
    {
      icon: Map,
      title: 'Roadmap Personalizado',
      description: 'Construa seu plano de desenvolvimento customizado para suas metas'
    },
    {
      icon: Rocket,
      title: 'Aceleração de Carreira',
      description: 'Reduza o tempo para alcançar seus objetivos profissionais'
    },
    {
      icon: Trophy,
      title: 'Conquistas Concretas',
      description: 'Resultados mensuráveis e tangíveis na sua trajetória'
    }
  ];

  return (
    <section id="objetivo" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold mb-4">
            O Objetivo do Programa
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Seu Objetivo Pessoal
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Todos os caminhos levam ao Objetivo, mas qual é o seu Objetivo? 
            O objetivo do Fórmula Tech Lead é ajudá-lo a descobrir e conquistar sua versão única de sucesso 
            como líder técnico.
          </p>
        </motion.div>

        {/* Main Goal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-3xl p-8 md:p-12 mb-12 text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400 rounded-full blur-3xl opacity-20"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <Star className="text-white" size={32} />
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-2">Encontre Seu Objetivo</h3>
                <p className="text-blue-100 text-lg">O destino é seu, o caminho nós construímos juntos</p>
              </div>
            </div>

            <p className="text-xl text-blue-50 leading-relaxed mb-8">
              Seja subir para Engineering Manager, tornar-se Staff Engineer, liderar uma equipe específica, 
              ou criar impacto em áreas estratégicas - sua jornada é única. O programa é estruturado para 
              identificar seus objetivos verdadeiros e criar um plano concreto para alcançá-los.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Zap className="text-blue-200 mb-3" size={32} />
                <h4 className="font-bold text-lg mb-2">Descoberta</h4>
                <p className="text-blue-100 text-sm">Identifique seus objetivos reais e aspirações de carreira</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Map className="text-blue-200 mb-3" size={32} />
                <h4 className="font-bold text-lg mb-2">Planejamento</h4>
                <p className="text-blue-100 text-sm">Crie um roadmap personalizado e acionável</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Rocket className="text-blue-200 mb-3" size={32} />
                <h4 className="font-bold text-lg mb-2">Execução</h4>
                <p className="text-blue-100 text-sm">Implemente com acompanhamento e ajustes contínuos</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Goals Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {goals.map((goal, index) => {
            const Icon = goal.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl border border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {goal.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {goal.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-blue-50 rounded-2xl p-8 max-w-2xl">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Qual é o seu Objetivo?
            </h3>
            <p className="text-slate-600 leading-relaxed">
              No Fórmula Tech Lead, você não apenas define seus objetivos - você cria um plano concreto, 
              com mentoria especializada e suporte contínuo para transformar sua visão em realidade.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramGoal;