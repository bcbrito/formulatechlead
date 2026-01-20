import React from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, Users, TrendingUp, Linkedin, Mail, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
const MentorInfo = () => {
  const {
    toast
  } = useToast();
  // Removed the generic handleContact as specific actions are now defined

  const handleLinkedinClick = () => {
    window.location.href = 'https://www.linkedin.com/in/brunocaetanobrito/';
  };

  const handleMailClick = () => {
    window.location.href = 'mailto:contato@formulatechlead.com.br';
  };

  const achievements = [{
    icon: Briefcase,
    number: '10+',
    label: 'Anos de Experiência'
  }, {
    icon: Users,
    number: '100+',
    label: 'Profissionais Mentorados'
  }, {
    icon: TrendingUp,
    number: '50+',
    label: 'Equipes Lideradas'
  }, {
    icon: Award,
    number: '20+',
    label: 'Projetos Entregues'
  }];
  const expertise = ['Liderança Técnica e Gestão de Equipes', 'Arquitetura de Software e Sistemas Escaláveis', 'Processos de Desenvolvimento Ágil', 'Crescimento e Desenvolvimento de Carreira', 'Cultura de Engenharia e DevOps', 'Product Management e Estratégia de Tech'];
  return <section id="mentor" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold mb-4">
            Seu Mentor
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Conheça o Mentor
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">Aprenda com quem já percorreu o caminho e desenvolveu vários líderes técnicos de sucesso</p>
        </motion.div>

        {/* Main Mentor Card */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="bg-gradient-to-br from-blue-50 to-white rounded-3xl shadow-xl overflow-hidden mb-12 border border-blue-100">
          <div className="grid md:grid-cols-5 gap-8">
            {/* Mentor Image */}
            <div className="md:col-span-2 relative">
              <div className="relative h-full min-h-[400px]">
                <img className="w-full h-full object-cover" alt="Professional tech mentor and leader" src="https://horizons-cdn.hostinger.com/b5bfb0c3-0fd4-4634-a3c4-7c1f4c4026c4/img_20251211_085004-Ukvut.jpg" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
              </div>
            </div>

            {/* Mentor Info */}
            <div className="md:col-span-3 p-8 md:p-12">
              <div className="mb-6">
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Fórmula Tech Lead</h3>
                <p className="text-xl text-blue-600 font-semibold mb-4">Tech Lead & Software Engineering</p>
                <p className="text-slate-600 leading-relaxed text-lg">Com mais de 10 anos de experiência em tecnologia, liderou times de engenharia em empresas de diversos portes, desde startups até grandes corporações. Especialista em desenvolver líderes técnicos e construir culturas de engenharia de alta performance.</p>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 mb-8">
                <Button onClick={handleLinkedinClick} variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  <Linkedin className="mr-2" size={20} />
                  LinkedIn
                </Button>
                <Button onClick={handleMailClick} variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  <Mail className="mr-2" size={20} />
                  Contato
                </Button>
              </div>

              {/* Testimonial Quote */}
              <div className="bg-blue-600 text-white p-6 rounded-xl relative">
                <Quote className="absolute top-4 left-4 text-blue-400 opacity-50" size={32} />
                <p className="italic text-lg leading-relaxed pl-8">"Minha missão é ajudar profissionais de tecnologia a descobrirem e alcançarem seu máximo potencial como líderes. </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6,
        delay: 0.2
      }} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {achievements.map((achievement, index) => {
          const Icon = achievement.icon;
          return <motion.div key={index} initial={{
            opacity: 0,
            scale: 0.9
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.3,
            delay: index * 0.1
          }} whileHover={{
            y: -8,
            transition: {
              duration: 0.2
            }
          }} className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 text-center hover:border-blue-300 hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Icon className="text-white" size={28} />
                </div>
                <p className="text-3xl font-bold text-slate-900 mb-1">{achievement.number}</p>
                <p className="text-slate-600 text-sm">{achievement.label}</p>
              </motion.div>;
        })}
        </motion.div>

        {/* Expertise */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6,
        delay: 0.3
      }} className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Áreas de Expertise
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {expertise.map((item, index) => <motion.div key={index} initial={{
            opacity: 0,
            x: -20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.3,
            delay: index * 0.05
          }} className="flex items-center gap-3 bg-white p-4 rounded-xl hover:shadow-md transition-shadow">
                <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                <p className="text-slate-700 font-medium">{item}</p>
              </motion.div>)}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6,
        delay: 0.4
      }} className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Pronto para Transformar Sua Carreira?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Junte-se ao programa Fórmula Tech Lead e comece sua jornada para se tornar 
              o líder técnico que você sempre quis ser
            </p>
            <Button onClick={handleMailClick} size="lg" className="bg-white text-blue-700 hover:bg-blue-50 text-lg px-8 py-6">
              Fale com o Mentor
            </Button>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default MentorInfo;