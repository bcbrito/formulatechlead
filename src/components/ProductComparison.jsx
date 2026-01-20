
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
      <div className="container mx-auto max-w-6xl">
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
            Entenda as Diferenças
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Compare os recursos e formatos de cada programa para tomar a melhor decisão.
          </p>
        </motion.div>

        {/* Responsive Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          
          {/* Header Column - Hidden on Mobile/Tablet, Visible on Desktop */}
          <div className="hidden lg:block col-span-1 pt-32">
            <div className="space-y-6">
              <div className="h-12 flex items-center font-semibold text-slate-700 border-b border-slate-100">Formato</div>
              <div className="h-12 flex items-center font-semibold text-slate-700 border-b border-slate-100">Duração</div>
              <div className="h-12 flex items-center font-semibold text-slate-700 border-b border-slate-100">Personalização</div>
              <div className="h-12 flex items-center font-semibold text-slate-700 border-b border-slate-100">Foco Principal</div>
              <div className="h-12 flex items-center font-semibold text-slate-700 border-b border-slate-100">Mock Interviews</div>
              <div className="h-12 flex items-center font-semibold text-slate-700 border-b border-slate-100">Networking</div>
            </div>
          </div>

          {/* Fórmula Tech Lead */}
          <div className="col-span-1 bg-blue-50/50 rounded-2xl p-6 hover:bg-blue-50 transition-colors border border-blue-100/50">
            <h3 className="text-xl font-bold text-blue-700 mb-2 text-center">Fórmula Tech Lead</h3>
            <p className="text-sm text-slate-500 text-center mb-8 h-10 flex items-center justify-center">Para quem quer construir a base</p>
            
            <div className="space-y-2 lg:space-y-6">
              <FeatureRow label="Formato" value="Em Grupo" colorClass="text-slate-700" borderClass="border-blue-100" />
              <FeatureRow label="Duração" value="1 Ano" colorClass="text-slate-700" borderClass="border-blue-100" />
              <FeatureRow label="Personalização" value="Alta" colorClass="text-slate-700" borderClass="border-blue-100" />
              <FeatureRow label="Foco Principal" value="Fundamentos" colorClass="text-slate-700" borderClass="border-blue-100" />
              <FeatureRow label="Mock Interviews" isMinus={true} colorClass="text-slate-400" borderClass="border-blue-100" />
              <FeatureRow label="Networking" isCheck={true} colorClass="text-blue-600" borderClass="border-blue-100" />
              
              <div className="pt-4">
                <Button className="w-full" variant="outline">
                  Aplicar Agora
                </Button>
              </div>
            </div>
          </div>

          {/* Interview Prep */}
          <div className="col-span-1 bg-purple-50/50 rounded-2xl p-6 hover:bg-purple-50 transition-colors border border-purple-100/50">
            <h3 className="text-xl font-bold text-purple-700 mb-2 text-center">Interview Prep</h3>
            <p className="text-sm text-slate-500 text-center mb-8 h-10 flex items-center justify-center">Para aprovação imediata</p>
            
            <div className="space-y-2 lg:space-y-6">
              <FeatureRow label="Formato" value="Individual + Simulados" colorClass="text-slate-700" borderClass="border-purple-100" />
              <FeatureRow label="Duração" value="1 Ano" colorClass="text-slate-700" borderClass="border-purple-100" />
              <FeatureRow label="Personalização" value="Focada na Vaga" colorClass="text-slate-700" borderClass="border-purple-100" />
              <FeatureRow label="Foco Principal" value="Aprovação" colorClass="text-slate-700" borderClass="border-purple-100" />
              <FeatureRow label="Mock Interviews" isCheck={true} colorClass="text-purple-600" borderClass="border-purple-100" />
              <FeatureRow label="Networking" isMinus={true} colorClass="text-slate-400" borderClass="border-purple-100" />
              
              <div className="pt-4">
                <Button className="w-full" variant="outline">
                  Aplicar Agora
                </Button>
              </div>
            </div>
          </div>

          {/* CI - Elite */}
          <div className="col-span-1 bg-slate-900 text-white rounded-2xl p-6 shadow-xl transform lg:scale-105 border-2 border-amber-500/50 relative mt-4 lg:mt-0">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-amber-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide whitespace-nowrap">
              Mais Completo
            </div>
            <h3 className="text-xl font-bold text-amber-400 mb-2 text-center">CI - Elite</h3>
            <p className="text-sm text-slate-300 text-center mb-8 h-10 flex items-center justify-center">Para quem quer o topo</p>
            
            <div className="space-y-2 lg:space-y-6">
              <FeatureRow label="Formato" value="Individual (1:1)" colorClass="text-slate-200" borderClass="border-slate-700" />
              <FeatureRow label="Duração" value="1 Ano" colorClass="text-slate-200" borderClass="border-slate-700" />
              <FeatureRow label="Personalização" value="Total (Exclusiva)" colorClass="text-slate-200" borderClass="border-slate-700" />
              <FeatureRow label="Foco Principal" value="Estratégia & Carreira" colorClass="text-slate-200" borderClass="border-slate-700" />
              <FeatureRow label="Mock Interviews" isCheck={true} colorClass="text-amber-400" borderClass="border-slate-700" />
              <FeatureRow label="Networking" isCheck={true} colorClass="text-amber-400" borderClass="border-slate-700" />
              
              <div className="pt-4">
                <Button className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold border-none">
                  Aplicar Agora
                </Button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductComparison;
