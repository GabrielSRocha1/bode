import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'Comunidade / Public Sale', value: 45, color: '#EAB308' }, // Gold
  { name: 'Liquidez (LP)', value: 25, color: '#A16207' }, // Dark Gold
  { name: 'Fundo de Caridade', value: 15, color: '#CA8A04' }, // Medium Gold
  { name: 'Desenvolvimento', value: 10, color: '#525252' }, // Dark Gray
  { name: 'Marketing', value: 5, color: '#262626' }, // Darker Gray
];

const Tokenomics: React.FC = () => {
  return (
    <section id="tokenomics" className="py-24 bg-dark-800 border-y border-white/5">
      <div className="max-w-[90%] xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
          
          {/* Chart Side */}
          <div className="w-full md:w-1/2 h-[400px] md:h-[500px] relative">
            <h3 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-bold text-white text-center">
              100M<br/><span className="text-sm text-gray-400 font-normal">BODE</span>
            </h3>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={100}
                  outerRadius={160}
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#171717', border: '1px solid #333', color: '#fff' }}
                  itemStyle={{ color: '#FACC15' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Info Side */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Tokenomics</h2>
            <div className="space-y-6">
              
              <div className="bg-dark-900 p-8 rounded-lg border-l-4 border-gold-500 shadow-xl">
                <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-400 text-lg">Suprimento Total</span>
                    <span className="text-white font-bold text-2xl">100.000.000 BODE</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-400 text-lg">Rede</span>
                    <span className="text-white font-bold text-lg">Binance Smart Chain (BSC)</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-lg">Taxa (Tax)</span>
                    <span className="text-gold-500 font-bold text-lg">2% (LP + Caridade)</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {data.map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3 p-2 rounded hover:bg-white/5 transition-colors">
                    <div className="w-5 h-5 rounded-full shadow-lg" style={{ backgroundColor: item.color }}></div>
                    <span className="text-gray-300 font-medium">{item.name} <span className="text-gold-500 font-bold">({item.value}%)</span></span>
                  </div>
                ))}
              </div>

              <p className="text-gray-500 mt-6 leading-relaxed max-w-xl">
                *A taxa de 2% garante liquidez sustentável para o projeto e alimenta o fundo contínuo de filantropia dos Bodes do Asfalto, garantindo que cada transação ajude quem precisa.
              </p>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;