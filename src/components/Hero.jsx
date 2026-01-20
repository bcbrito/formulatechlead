import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Users, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
const Hero = () => {
  const {
    toast
  } = useToast();
  const handleCTA = () => {
    const element = document.getElementById('escolha-ideal');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8
        }} className="text-white">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.2
          }} className="inline-block mb-4 px-4 py-2 bg-blue-500/30 backdrop-blur-sm rounded-full text-sm font-semibold">
              🚀 Aceleração de Liderança Técnica
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              A Excelência na <br />
              <span className="text-blue-200">Liderança Tech</span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Solicite uma sessão de diagnóstico gratuita e tenha clareza sobre como sair da execução técnica e assumir a liderança com total segurança.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button onClick={handleCTA} size="lg" className="bg-white text-blue-700 hover:bg-blue-50 text-lg px-8 py-6">
                Solicitar Diagnóstico Gratuito
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button onClick={() => document.getElementById('produtos')?.scrollIntoView({
              behavior: 'smooth'
            })} size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6">
                Ver Produtos
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.4
            }} className="text-center">
                <Award className="mx-auto mb-2 text-blue-200" size={32} />
                <p className="text-sm text-blue-200">Metodologia Exclusiva</p>
              </motion.div>
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.5
            }} className="text-center">
                <Users className="mx-auto mb-2 text-blue-200" size={32} />
                <p className="text-sm text-blue-200">Líderes Formados</p>
              </motion.div>
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.6
            }} className="text-center">
                <Target className="mx-auto mb-2 text-blue-200" size={32} />
                <p className="text-sm text-blue-200">Resultados Comprovados</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div initial={{
          opacity: 0,
          x: 50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          delay: 0.3
        }} className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img className="w-full h-[500px] object-cover" alt="Tech leadership strategic meeting" src="https://images.unsplash.com/photo-1552664730-d307ca884978" />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 1
          }} className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-[280px]">
              <p className="text-slate-800 font-bold text-lg mb-1">Ecossistema Completo</p>
              <p className="text-slate-600 text-sm">Da entrevista à gestão executiva.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default Hero;