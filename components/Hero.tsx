import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div id="comprar" className="relative w-full overflow-hidden bg-dark-900 sm:min-h-screen">
      {/* Mobile: Container que acompanha o tamanho da imagem */}
      <div className="relative w-full aspect-[4/3] sm:hidden">
        <div 
          className="absolute inset-0 bg-contain bg-center bg-no-repeat z-0"
          style={{ 
            backgroundImage: 'url("/site (1).png")',
          }}
        >
          {/* Very light overlay to ensure Navbar visibility, but keeping image pure */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        {/* Text Overlay Mobile */}
        <div className="absolute inset-0 z-10 flex flex-col justify-start items-end pt-32 pr-4">
          <div className="text-right">
            <h1 className="text-lg sm:text-xl font-bold text-white mb-2 drop-shadow-2xl leading-tight">
              {t('hero.title')}
            </h1>
            <p className="text-xs sm:text-sm text-white italic drop-shadow-lg leading-tight">
              {t('hero.subtitle')}
            </p>
          </div>
          {/* Botão Empresas Parceiras - Mobile Only */}
          <div className="mt-6 pr-0">
            <a
              href="https://parceiros.bodecoin.digital/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold-600 hover:bg-gold-500 text-black px-5 py-2 rounded-lg font-bold transition-all transform hover:scale-105 cursor-pointer text-sm"
            >
              {t('nav.buyNow')}
            </a>
          </div>
        </div>
      </div>
      
      {/* Desktop: Background Image Full Screen */}
      <div 
        className="hidden sm:block absolute inset-0 bg-cover bg-center bg-no-repeat z-0 min-h-[100vh]"
        style={{ 
          backgroundImage: 'url("/site (1).png")', 
        }}
      >
        {/* Very light overlay to ensure Navbar visibility, but keeping image pure */}
        <div className="absolute inset-0 bg-black/15 md:bg-black/20"></div>
      </div>
      
      {/* Text Overlay Desktop */}
      <div className="hidden sm:flex absolute inset-0 z-10 flex-col justify-start items-end pt-32 md:pt-40 lg:pt-48 pr-8 md:pr-16 lg:pr-24">
        <div className="text-right">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 drop-shadow-2xl">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-white italic drop-shadow-lg">
            {t('hero.subtitle')}
          </p>
        </div>
      </div>

    </div>
  );
};

export default Hero;