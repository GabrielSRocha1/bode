import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);
  
  const linkToCopy = '4t7EWkBU3HAvcFTQRqzHoZ1g3GCJ3BpxwGLf876fLLjV';
  
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(linkToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Erro ao copiar link:', err);
    }
  };
  
  return (
    <section id="sobre" className="py-24 bg-dark-900 relative">
      <div className="absolute left-0 top-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent"></div>
      
      <div className="max-w-[90%] xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="order-2 md:order-1 flex justify-center md:justify-end">
             <div className="relative w-full max-w-xs md:max-w-md"> 
                <img 
                  src="Img-site (1).png" 
                  alt="Brotherhood on the road" 
                  className="rounded-lg shadow-2xl w-full h-auto object-contain max-h-[600px]"
                />
             </div>
          </div>
          
          <div className="order-1 md:order-2">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              {t('payment.heading')}
            </h2>
            <h3 className="text-lg sm:text-xl md:text-2xl text-gray-400 font-medium mb-6 sm:mb-8">
              {t('payment.subheading')}
            </h3>
            
            <div className="space-y-4 sm:space-y-6 md:space-y-8 text-gray-300 font-body leading-relaxed text-sm sm:text-base md:text-lg text-justify md:text-left max-w-2xl">
              <p>{t('payment.text1')}</p>
              <p>{t('payment.text2')}</p>
              <p>{t('payment.text3')}</p>
            </div>
          </div>
        </div>
        
        {/* Download Section */}
        <div className="mt-16">
          <div className="flex flex-col md:flex-row flex-wrap md:flex-nowrap items-center justify-center gap-6 md:gap-4 max-w-7xl mx-auto">
            {/* App Store and Google Play Section */}
            <div className="flex items-center justify-center gap-0 flex-shrink-0">
              <div className="flex flex-col items-center">
                <img src="/unnamed (1).png" alt="App Store" className="h-24 w-auto object-contain" />
              </div>
              <a 
                href="https://okx.com/pt-br/join/69600528" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center hover:opacity-80 transition-opacity"
              >
                <img src="/unnamed.png" alt="Google Play" className="h-24 w-auto object-contain" />
              </a>
            </div>

            {/* YouTube Section */}
            <div className="flex items-center justify-center gap-0 flex-shrink-0">
              <button
                onClick={handleCopyLink}
                className="flex flex-col items-center hover:opacity-80 transition-opacity cursor-pointer relative group"
                title={copied ? 'Link copiado!' : 'Clique para copiar o link'}
              >
                <img src="WhatsApp Image 2025-12-05 at 12.10.49.jpeg" alt="Google" className="h-24 w-auto object-contain" />
                {copied && (
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gold-500 text-black text-xs font-bold px-2 py-1 rounded whitespace-nowrap">
                    Link copiado!
                  </span>
                )}
              </button>
              <a 
                href="https://www.youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center hover:opacity-80 transition-opacity"
              >
                <img src="/yutube 4.png" alt="YouTube" className="h-24 w-auto object-contain" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;