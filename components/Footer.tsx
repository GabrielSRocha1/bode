import React from 'react';
import { X, Instagram } from 'lucide-react';

const TikTokIcon: React.FC<{ size?: number }> = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-gray-900">
      <div className="max-w-[90%] xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Entre para a Revolução.</h2>
            <h3 className="text-xl md:text-2xl text-gold-500 mb-8">Junte-se à Irmandade Cripto.</h3>
            <p className="text-gray-400 max-w-lg mb-8 text-lg leading-relaxed">
              Acompanhe nossas redes sociais e fique por dentro das novidades, ações sociais e eventos exclusivos para holders da BodesCoin.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/bode_coin/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-dark-800 flex items-center justify-center hover:bg-gold-500 hover:text-black transition-all hover:scale-110">
                <Instagram size={24} />
              </a>
              <a href="https://x.com/bode_coin" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-dark-800 flex items-center justify-center hover:bg-gold-500 hover:text-black transition-all hover:scale-110">
                <X size={24} />
              </a>
              <a href="https://www.tiktok.com/@bode_coin" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-dark-800 flex items-center justify-center hover:bg-gold-500 hover:text-black transition-all hover:scale-110">
                <TikTokIcon size={24} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-8 text-white border-l-4 border-gold-500 pl-4">Links Rápidos</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#sobre" className="hover:text-gold-500 transition-colors">Sobre Nós</a></li>
              <li><a href="#beneficios" className="hover:text-gold-500 transition-colors">Benefícios</a></li>
              <li><a href="#timeline" className="hover:text-gold-500 transition-colors">Roadmap / Como Funciona</a></li>
              <li><a href="#tokenomics" className="hover:text-gold-500 transition-colors">Tokenomics</a></li>
              <li><a href="#" className="hover:text-gold-500 transition-colors">Whitepaper (PDF)</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-8 text-white border-l-4 border-gold-500 pl-4">Legal</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-gold-500 transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-gold-500 transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-gold-500 transition-colors">Disclaimer de Investimento</a></li>
              <li><a href="#" className="hover:text-gold-500 transition-colors">Contato Suporte</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} BodesCoin. Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0">Desenvolvido com Paixão e Blockchain.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;