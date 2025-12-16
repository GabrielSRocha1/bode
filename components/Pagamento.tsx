import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import PaymentDownloadSection from './PaymentDownloadSection';

const About: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section id="sobre" className="py-24 bg-dark-900 relative">
      <div className="absolute left-0 top-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent"></div>
      
      <div className="max-w-[90%] xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="order-2 md:order-1 flex justify-center md:justify-end">
             <div className="relative w-full max-w-xs md:max-w-md"> 
                <img 
                  src="/WhatsApp Image 2025-12-16 at 09.30.25.jpeg" 
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
        <PaymentDownloadSection />

      </div>
      {/* Anchor target for Comprar Agora */}
      <div id="pagamento" className="absolute -top-24"></div>
    </section>
  );
};

export default About;