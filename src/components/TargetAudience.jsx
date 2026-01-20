import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, User } from 'lucide-react';

const TargetAudience = () => {
  const profiles = [
    {
      title: 'Desenvolvedores Seniores',
      description: 'Profissionais com sólida experiência técnica que buscam dar o próximo passo na carreira',
      points: [
        '3+ anos de experiência',
        'Conhecimento técnico consolidado',
        'Interesse em liderança',
        'Busca por crescimento profissional'
      ]
    },
    {
      title: 'Tech Leads em Formação',
      description: 'Profissionais que já assumem responsabilidades de liderança e querem se aprimorar',
      points: [
        'Lideram projetos ou pessoas',
        'Desejam estruturar conhecimentos',
        'Buscam metodologias comprovadas',
        'Querem expandir impacto'
      ]
    },
    {
      title: 'Líderes Técnicos',
      description: 'Tech Leads que desejam aprimorar suas habilidades e alcançar novos patamares',
      points: [
        'Já atuam como Tech Lead',
        'Buscam evolução contínua',
        'Querem mentorias especializadas',
        'Almejam posições estratégicas'
      ]
    }
  ];

  return (
    <section id="publico" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold mb-4">
            Para Quem é Este Programa
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Este programa é ideal para você
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Se você é um profissional de tecnologia com ambição de crescer e liderar, 
            o Fórmula Tech Lead foi desenvolvido especialmente para impulsionar sua carreira
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {profiles.map((profile, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-slate-100"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <User className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                {profile.title}
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {profile.description}
              </p>
              <ul className="space-y-3">
                {profile.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-8 md:p-12 shadow-xl"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                Não importa onde você está agora
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                O importante é para onde você quer ir. Se você tem a ambição de se tornar 
                um líder técnico excepcional e está disposto a se dedicar ao seu desenvolvimento, 
                este programa é para você.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-blue-600" size={24} />
                  <span className="text-slate-700 font-semibold">Mentalidade de crescimento</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-blue-600" size={24} />
                  <span className="text-slate-700 font-semibold">Comprometimento com aprendizado</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-blue-600" size={24} />
                  <span className="text-slate-700 font-semibold">Disposição para aplicar conhecimento</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                className="w-full h-[350px] object-cover rounded-xl shadow-xl"
                alt="Diverse group of tech professionals learning together"
               src="https://images.unsplash.com/photo-1564531718001-9813bc3fd35d" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TargetAudience;