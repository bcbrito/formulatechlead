
import React from 'react';
import { motion } from 'framer-motion';
import { Check, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProductComparison = () => {
  // Helper for rows to keep code clean and responsive
  const FeatureRow = ({ label, value, isCheck, isMinus, colorClass, borderClass }) => (
    <div className={`flex flex-col lg:flex-row items-center justify-between lg:justify-center p-3 lg:p-0 lg:h-12 border-b ${borderClass}`}>
      <span className="lg:hidden text-xs font-bold text-slate-400 uppercase w-full text-left mb-1">{label}</span>
      <span className={`text-sm font-medium ${colorClass} w-full text-left lg:text-center lg:w-auto`}>
        {isCheck ? <Check size={20} className="inline-block" /> : 
         isMinus ? <Minus size={20} className="inline-block" /> : 
         value}
      </span>
    </div>
  );

  return (
    <section id="comparativo" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-semibold mb-4">
            Comparativo
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Escolha o Programa Certo para Sua Etapa
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Cada programa foi desenhado para uma fase específica da sua carreira em desenvolvimento.
          </p>
        </motion.div>

        {/* Responsive Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-3">
          
          {/* Dev Junior */}
          <div className="col-span-1 bg-green-50/50 rounded-2xl p-4 lg:p-5 hover:bg-green-50 transition-colors border border-green-100/50">
            <h3 className="text-sm lg:text-base font-bold text-green-700 mb-2 text-center">Dev Junior</h3>
            <p className="text-xs text-slate-500 text-center mb-6 h-10 flex items-center justify-center">Para iniciantes</p>
            
            <div className="space-y-2 text-xs">
              <FeatureRow label="Nível" value="Iniciante" colorClass="text-slate-700" borderClass="border-green-100" />
              <FeatureRow label="Experiência" value="0-1 anos" colorClass="text-slate-700" borderClass="border-green-100" />
              <FeatureRow label="Foco" value="Fundamentos" colorClass="text-slate-700" borderClass="border-green-100" />
              <FeatureRow label="Formato" value="1a1 / SHT" colorClass="text-slate-700" borderClass="border-green-100" />
              <FeatureRow label="Dedicação" value="Alta" colorClass="text-green-600" borderClass="border-green-100" />
            </div>
          </div>

          {/* Dev Pleno */}
          <div className="col-span-1 bg-blue-50/50 rounded-2xl p-4 lg:p-5 hover:bg-blue-50 transition-colors border border-blue-100/50">
            <h3 className="text-sm lg:text-base font-bold text-blue-700 mb-2 text-center">Dev Pleno</h3>
            <p className="text-xs text-slate-500 text-center mb-6 h-10 flex items-center justify-center">1-3 anos de exp.</p>
            
            <div className="space-y-2 text-xs">
              <FeatureRow label="Nível" value="Intermediário" colorClass="text-slate-700" borderClass="border-blue-100" />
              <FeatureRow label="Experiência" value="1-3 anos" colorClass="text-slate-700" borderClass="border-blue-100" />
              <FeatureRow label="Foco" value="Autonomia" colorClass="text-slate-700" borderClass="border-blue-100" />
              <FeatureRow label="Formato" value="1a1 / SHT" colorClass="text-slate-700" borderClass="border-blue-100" />
              <FeatureRow label="Dedicação" value="Alta" colorClass="text-blue-600" borderClass="border-blue-100" />
            </div>
          </div>

          {/* Dev Senior */}
          <div className="col-span-1 bg-purple-50/50 rounded-2xl p-4 lg:p-5 hover:bg-purple-50 transition-colors border border-purple-100/50">
            <h3 className="text-sm lg:text-base font-bold text-purple-700 mb-2 text-center">Dev Senior</h3>
            <p className="text-xs text-slate-500 text-center mb-6 h-10 flex items-center justify-center">3-6 anos de exp.</p>
            
            <div className="space-y-2 text-xs">
              <FeatureRow label="Nível" value="Avançado" colorClass="text-slate-700" borderClass="border-purple-100" />
              <FeatureRow label="Experiência" value="3-6 anos" colorClass="text-slate-700" borderClass="border-purple-100" />
              <FeatureRow label="Foco" value="Arquitetura" colorClass="text-slate-700" borderClass="border-purple-100" />
              <FeatureRow label="Formato" value="1a1 / SHT" colorClass="text-slate-700" borderClass="border-purple-100" />
              <FeatureRow label="Dedicação" value="Alta" colorClass="text-purple-600" borderClass="border-purple-100" />
            </div>
          </div>

          {/* Tech Lead */}
          <div className="col-span-1 bg-amber-50/50 rounded-2xl p-4 lg:p-5 hover:bg-amber-50 transition-colors border border-amber-100/50 relative md:row-span-1 lg:row-span-1">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-amber-500 text-slate-900 text-xs font-bold px-2 py-0.5 rounded-full uppercase tracking-wide whitespace-nowrap">
              Elite
            </div>
            <h3 className="text-sm lg:text-base font-bold text-amber-700 mb-2 text-center mt-2">Tech Lead</h3>
            <p className="text-xs text-slate-500 text-center mb-6 h-10 flex items-center justify-center">8+ anos de exp.</p>
            
            <div className="space-y-2 text-xs">
              <FeatureRow label="Nível" value="Elite" colorClass="text-slate-700" borderClass="border-amber-100" />
              <FeatureRow label="Experiência" value="8+ anos" colorClass="text-slate-700" borderClass="border-amber-100" />
              <FeatureRow label="Foco" value="Liderança" colorClass="text-slate-700" borderClass="border-amber-100" />
              <FeatureRow label="Formato" value="1a1 / SHT" colorClass="text-slate-700" borderClass="border-amber-100" />
              <FeatureRow label="Dedicação" value="Máxima" colorClass="text-amber-600" borderClass="border-amber-100" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductComparison;
