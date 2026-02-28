import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Users, BrainCircuit, Rocket, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProductsDetail = () => {
  const handleRedirect = () => {
    window.location.href = 'https://www.instagram.com/brunocaetanobrito/';
  };

  const products = [
    {
      id: 'dev-junior',
      title: 'Fórmula Tech Lead - Dev Junior',
      subtitle: 'Para Iniciantes',
      badge: 'Nível Inicial',
      color: 'green',
      colorClasses: {
        bg: 'bg-green-100',
        text: 'text-green-700',
        button: 'bg-green-600 hover:bg-green-700',
        icon: 'text-green-600',
        overlay: 'bg-green-900/10'
      },
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
      what: 'Um programa avançado para pessoas que querem iniciar na carreira de desenvolvimento, dominando fundamentos de lógica de programação, estrutura de dados, conhecimento básico sobre arquitetura de software, banco de dados, frontend e backend.',
      for: 'Para pessoas sem experiência que querem iniciar na carreira de programação, com evolução no salário, e se posicionar como dev júnior.',
      goal: 'Se tornar um Desenvolvedor Junior capaz de realizar implementações no dia a dia com segurança técnica, entregar com alta qualidade e ser reconhecido como referência técnica dentro da empresa.'
    },
    {
      id: 'dev-pleno',
      title: 'Fórmula Tech Lead - Dev Pleno',
      subtitle: 'Para Desenvolvedores Júnior',
      badge: 'Nível Intermediário',
      color: 'blue',
      colorClasses: {
        bg: 'bg-blue-100',
        text: 'text-blue-700',
        button: 'bg-blue-600 hover:bg-blue-700',
        icon: 'text-blue-600',
        overlay: 'bg-blue-900/10'
      },
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978',
      what: 'Um programa de aceleração profissional focado em Desenvolvedores Júnior que desejam conquistar sua primeira vaga como Dev Pleno. Combina trilhas práticas, acompanhamento estratégico e feedback individualizado para desenvolver competências técnicas e comportamentais.',
      for: 'Devs com 1 a 3 anos de experiência que dominam o básico, mas ainda não conseguem entregar com autonomia. Profissionais que querem aumentar salário e se destacar no time.',
      goal: 'Sair do nível Júnior e conquistar a posição de Dev Pleno com segurança, autonomia e consistência, dominando as habilidades técnicas e comportamentais que o mercado exige.'
    },
    {
      id: 'dev-senior',
      title: 'Fórmula Tech Lead - Dev Senior',
      subtitle: 'Para Desenvolvedores Pleno',
      badge: 'Nível Avançado',
      color: 'purple',
      colorClasses: {
        bg: 'bg-purple-100',
        text: 'text-purple-700',
        button: 'bg-purple-600 hover:bg-purple-700',
        icon: 'text-purple-600',
        overlay: 'bg-purple-900/10'
      },
      image: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca',
      what: 'Um programa avançado para Desenvolvedores Pleno que querem acelerar sua evolução para o nível Sênior, dominando arquitetura, tomada de decisão técnica, ownership e entregas de alto impacto.',
      for: 'Devs Pleno com 3 a 6 anos de experiência que entregam bem, mas ainda não têm domínio completo de arquitetura, boas práticas e decisões críticas. Quem quer aumentar salário e se posicionar como especialista.',
      goal: 'Se tornar um Desenvolvedor Sênior capaz de tomar decisões técnicas sólidas, liderar soluções complexas, entregar com alta qualidade e ser reconhecido como referência técnica dentro da empresa.'
    },
    {
      id: 'tech-lead',
      title: 'Fórmula Tech Lead',
      subtitle: 'Para Desenvolvedores Sênior',
      badge: 'Nível Elite',
      color: 'amber',
      colorClasses: {
        bg: 'bg-amber-100',
        text: 'text-amber-700',
        button: 'bg-amber-600 hover:bg-amber-700',
        icon: 'text-amber-600',
        overlay: 'bg-amber-900/10'
      },
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e',
      what: 'Um programa de acompanhamento personalizado para DEV Sêniors que querem acelerar a transição para Tech Lead, aumentando salário e conquistando autoridade técnica. Implementa um método estruturado com direcionamento estratégico, acompanhamento individualizado e feedback contínuo.',
      for: 'Profissionais com mais de 8 anos de experiência. Desenvolvedores Sênior em empresas de tecnologia, startups ou squads ágeis que se sentem travados na carreira.',
      goal: 'Se tornar um líder técnico capaz de criar e guiar times de alta performance, sair da execução e conquistar autoridade como Tech Lead, liderando projetos complexos com segurança e sendo reconhecido como referência dentro da empresa.'
    }
  ];

  return (
    <section id="produtos" className="py-20 px-4 bg-slate-50">
      <div className="container mx-auto max-w-6xl space-y-24">
        
        {products.map((product, index) => (
          <div key={product.id} id={`produto-${product.id}`} className="scroll-mt-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-200"
            >
              <div className="grid lg:grid-cols-2">
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className={`inline-block px-3 py-1 ${product.colorClasses.bg} ${product.colorClasses.text} rounded-full text-sm font-semibold mb-6 w-fit`}>
                    {product.badge}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                    {product.title}
                  </h3>
                  <p className="text-lg text-slate-500 mb-8">
                    {product.subtitle}
                  </p>
                  
                  <div className="space-y-6 mb-8">
                    <div>
                      <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                        <BrainCircuit className={product.colorClasses.icon} size={20} /> O que é?
                      </h4>
                      <p className="text-slate-600">{product.what}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                        <Users className={product.colorClasses.icon} size={20} /> Para quem é?
                      </h4>
                      <p className="text-slate-600">{product.for}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                        <Rocket className={product.colorClasses.icon} size={20} /> Objetivo
                      </h4>
                      <p className="text-slate-600">{product.goal}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                        <Clock className={product.colorClasses.icon} size={20} /> Formato
                      </h4>
                      <p className="text-slate-600">Sessão 1 a 1 e SHT</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-end border-t border-slate-100 pt-8 mt-auto">
                    <Button 
                      onClick={handleRedirect}
                      className={`${product.colorClasses.button} text-white`}
                    >
                      Solicitar Diagnóstico
                    </Button>
                  </div>
                </div>
                <div className="bg-slate-100 relative min-h-[300px] lg:min-h-full">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 ${product.colorClasses.overlay} mix-blend-multiply`}></div>
                </div>
              </div>
            </motion.div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default ProductsDetail;