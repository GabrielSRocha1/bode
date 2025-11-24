import React from 'react';
import { TrendingUp, Wrench, Heart, Shield, Users, Globe } from 'lucide-react';

const benefits = [
  {
    icon: <TrendingUp size={32} className="text-gold-500" />,
    title: "Investimento & Valor",
    desc: "Um ativo digital que cresce junto com a força da nossa comunidade e expansão da marca."
  },
  {
    icon: <Wrench size={32} className="text-gold-500" />,
    title: "Troca de Serviços",
    desc: "Utilize BodesCoin para pagar mecânicos, hospedagem e ingressos em eventos parceiros."
  },
  {
    icon: <Heart size={32} className="text-gold-500" />,
    title: "Filantropia Real",
    desc: "Parte das taxas de transação é convertida automaticamente para fundos de ações sociais."
  }
];

const differentials = [
  {
    icon: <Users size={24} />,
    title: "Foco na Comunidade",
    desc: "Governança descentralizada ouvindo a voz da irmandade."
  },
  {
    icon: <Shield size={24} />,
    title: "Transparência Total",
    desc: "Contratos auditados e carteiras de caridade públicas."
  },
  {
    icon: <Globe size={24} />,
    title: "Rede Global",
    desc: "Conectando motociclistas de diversos capítulos pelo mundo."
  },
  {
    icon: <TrendingUp size={24} />,
    title: "Potencial de Valorização",
    desc: "Escassez programada e utilidade real no dia a dia."
  }
];

const Features: React.FC = () => {
  return (
    <section id="beneficios" className="py-24 bg-dark-800">
      <div className="max-w-[90%] xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Benefits Grid */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">O Motor da Nossa Economia</h2>
          <p className="text-gray-400 text-lg">Por que ter BodesCoin na sua carteira digital?</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {benefits.map((item, idx) => (
            <div key={idx} className="bg-dark-700 p-8 md:p-10 rounded-2xl border border-gray-800 hover:border-gold-500/50 transition-all hover:bg-dark-700/80 group">
              <div className="w-16 h-16 bg-dark-900 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform border border-gray-800 group-hover:border-gold-500">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed text-base">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Differentials Grid (2x2) */}
        <div className="bg-dark-900 rounded-3xl p-8 md:p-16 border border-white/5">
            <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-white">Diferenciais do Projeto</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                {differentials.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-6 p-6 rounded-xl hover:bg-white/5 transition-colors">
                        <div className="flex-shrink-0 text-gold-500 mt-1 scale-125">
                            {item.icon}
                        </div>
                        <div>
                            <h4 className="font-bold text-white text-xl mb-2">{item.title}</h4>
                            <p className="text-gray-400 text-base leading-relaxed">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default Features;