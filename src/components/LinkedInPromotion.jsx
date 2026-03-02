import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';
import LinkedInNewsletter from '@/components/LinkedInNewsletter';

const LinkedInPromotion = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-slate-50 to-blue-50">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-lg border-l-4 border-blue-600 p-8 md:p-12"
        >
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="text-blue-600" size={28} />
              </div>
            </div>
            
            <div className="flex-grow">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                📢 Insights Semanais sobre Carreira Tech
              </h2>
              
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                Acompanhe conteúdo exclusivo no LinkedIn sobre estratégias de carreira, liderança técnica, 
                tendências no mercado e como acelerar sua evolução profissional.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold text-xl">✓</span>
                  <div>
                    <p className="font-semibold text-slate-900">Estratégias Comprovadas</p>
                    <p className="text-sm text-slate-600">Métodos que funcionam para evoluir de carreira</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold text-xl">✓</span>
                  <div>
                    <p className="font-semibold text-slate-900">Análises de Mercado</p>
                    <p className="text-sm text-slate-600">Tendências e oportunidades em TI</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold text-xl">✓</span>
                  <div>
                    <p className="font-semibold text-slate-900">Comunidade Ativa</p>
                    <p className="text-sm text-slate-600">Conecte-se com outros profissionais</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold text-xl">✓</span>
                  <div>
                    <p className="font-semibold text-slate-900">100% Gratuito</p>
                    <p className="text-sm text-slate-600">Sem custos, apenas valor</p>
                  </div>
                </div>
              </div>

              <LinkedInNewsletter />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LinkedInPromotion;
