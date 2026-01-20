import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Users, BrainCircuit, Rocket, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProductsDetail = () => {
  const handleRedirect = () => {
    window.location.href = 'https://www.instagram.com/brunocaetanobrito/';
  };

  return (
    <section id="produtos" className="py-20 px-4 bg-slate-50">
      <div className="container mx-auto max-w-6xl space-y-24">
        
        {/* Produto 1: Fórmula Tech Lead */}
        <div id="produto-formula" className="scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-200"
          >
            <div className="grid lg:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6 w-fit">
                  Mentoria em Grupo
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Fórmula Tech Lead
                </h3>
                <p className="text-xl text-slate-600 mb-8">
                  O programa definitivo para formar a base sólida da sua liderança técnica.
                </p>
                
                <div className="space-y-6 mb-8">
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                      <BrainCircuit className="text-blue-600" size={20} /> O que é?
                    </h4>
                    <p className="text-slate-600">Mentoria em grupo estruturada para desenvolver as competências essenciais de gestão, liderança técnica e estratégia.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                      <Users className="text-blue-600" size={20} /> Para quem é?
                    </h4>
                    <p className="text-slate-600">Desenvolvedores Sêniores querendo virar Tech Lead e Tech Leads iniciantes buscando estruturação.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                      <Rocket className="text-blue-600" size={20} /> Objetivo
                    </h4>
                    <p className="text-slate-600">Dominar os fundamentos da liderança técnica para assumir times com confiança.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                      <Clock className="text-blue-600" size={20} /> Duração
                    </h4>
                    <p className="text-slate-600">1 Ano</p>
                  </div>
                </div>

                <div className="flex items-center justify-end border-t border-slate-100 pt-8 mt-auto">
                  <Button 
                    onClick={handleRedirect}
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Solicitar Diagnóstico
                  </Button>
                </div>
              </div>
              <div className="bg-slate-100 relative min-h-[300px] lg:min-h-full">
                <img 
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998" 
                  alt="Group mentorship session" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply"></div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Produto 2: Interview Tech Lead */}
        <div id="produto-interview" className="scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-200"
          >
            <div className="grid lg:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-6 w-fit">
                  Preparação Intensiva
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Interview Tech Lead
                </h3>
                <p className="text-xl text-slate-600 mb-8">
                  Preparação cirúrgica para garantir sua aprovação em processos seletivos de liderança.
                </p>
                
                <div className="space-y-6 mb-8">
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                      <BrainCircuit className="text-purple-600" size={20} /> O que é?
                    </h4>
                    <p className="text-slate-600">Simulações de entrevista (mock interviews), revisão de currículo/LinkedIn e estratégia de posicionamento.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                      <Users className="text-purple-600" size={20} /> Para quem é?
                    </h4>
                    <p className="text-slate-600">Profissionais participando (ou prestes a participar) de processos seletivos para Tech Lead ou Engineering Manager.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                      <Rocket className="text-purple-600" size={20} /> Objetivo
                    </h4>
                    <p className="text-slate-600">Aprovação na vaga desejada com a melhor negociação salarial possível.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                      <Clock className="text-purple-600" size={20} /> Duração
                    </h4>
                    <p className="text-slate-600">1 Ano</p>
                  </div>
                </div>

                <div className="flex items-center justify-end border-t border-slate-100 pt-8 mt-auto">
                  <Button 
                    onClick={handleRedirect}
                    className="bg-purple-600 hover:bg-purple-700 text-white"
                  >
                    Solicitar Diagnóstico
                  </Button>
                </div>
              </div>
              <div className="bg-slate-100 relative min-h-[300px] lg:min-h-full">
                <img 
                  src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21" 
                  alt="Job interview preparation" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-purple-900/10 mix-blend-multiply"></div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Produto 3: CI - Consultoria Individual */}
        <div id="produto-ci" className="scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 text-white"
          >
            <div className="grid lg:grid-cols-2">
              <div className="order-2 lg:order-1 bg-slate-800 relative min-h-[300px] lg:min-h-full">
                <img 
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf" 
                  alt="Executive individual consulting" 
                  className="absolute inset-0 w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-transparent"></div>
              </div>
              
              <div className="order-1 lg:order-2 p-8 md:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/20 text-amber-400 border border-amber-500/30 rounded-full text-sm font-semibold mb-6 w-fit">
                  <Star size={14} fill="currentColor" /> Premium - Elite
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  CI - TechLead de Elite
                </h3>
                <p className="text-xl text-slate-300 mb-8">
                  Consultoria Individual exclusiva para quem busca o topo da carreira técnica.
                </p>
                
                <div className="space-y-6 mb-8">
                  <div>
                    <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                      <BrainCircuit className="text-amber-400" size={20} /> O que é?
                    </h4>
                    <p className="text-slate-300">Acompanhamento individual, personalizado e profundo (1:1). Foco total nos seus desafios específicos e contexto atual.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                      <Users className="text-amber-400" size={20} /> Para quem é?
                    </h4>
                    <p className="text-slate-300">Líderes que já atuam e precisam desbloquear o próximo nível (Staff, Principal, EM) ou resolver desafios complexos.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                      <Rocket className="text-amber-400" size={20} /> Objetivo
                    </h4>
                    <p className="text-slate-300">Tornar-se um Tech Lead de Elite, referência no mercado, com resultados estratégicos de alto impacto.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                      <Clock className="text-amber-400" size={20} /> Duração
                    </h4>
                    <p className="text-slate-300">1 Ano</p>
                  </div>
                </div>

                <div className="flex items-center justify-end border-t border-slate-700 pt-8 mt-auto">
                  <Button 
                    onClick={handleRedirect}
                    className="bg-amber-500 hover:bg-amber-600 text-white font-bold"
                  >
                    Solicitar Diagnóstico
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default ProductsDetail;