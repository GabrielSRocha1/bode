import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div id="comprar" className="relative w-full overflow-hidden bg-dark-900 sm:min-h-screen">
      {/* Mobile: apenas imagem de fundo */}
      <div className="relative w-full aspect-[4/3] sm:hidden">
        <div 
          className="absolute inset-0 bg-contain bg-center bg-no-repeat z-0"
          style={{ 
            backgroundImage: 'url("/WhatsApp Image 2025-12-16 at 09.30.25 (1).jpeg")',
          }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      </div>
      
      {/* Desktop: apenas imagem de fundo em tela cheia */}
      <div 
        className="hidden sm:block absolute inset-0 bg-cover bg-center bg-no-repeat z-0 min-h-[100vh]"
        style={{ 
          backgroundImage: 'url("/WhatsApp Image 2025-12-16 at 09.30.25 (1).jpeg")', 
        }}
      >
        <div className="absolute inset-0 bg-black/15 md:bg-black/20"></div>
      </div>
    </div>
  );
};

export default Hero;