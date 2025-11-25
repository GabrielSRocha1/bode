import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section id="sobre" className="py-24 bg-dark-900 relative">
      <div className="absolute left-0 top-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent"></div>
      
      <div className="max-w-[90%] xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="order-2 md:order-1 flex justify-center md:justify-start">
             <div className="relative w-full max-w-lg">
                <div className="absolute -inset-4 border-2 border-gold-500/20 rounded-xl translate-x-4 translate-y-4 z-0"></div>
                <img 
                  src="https://i.pinimg.com/1200x/3b/04/a3/3b04a3ea0479318e1ebe7494ab697174.jpg" 
                  alt="Brotherhood on the road" 
                  className="relative z-10 rounded-lg shadow-2xl grayscale contrast-125 w-full h-auto object-cover"
                />
             </div>
          </div>
          
          <div className="order-1 md:order-2">
            <h4 className="text-gold-500 font-bold uppercase tracking-widest text-sm mb-2">{t('about.title')}</h4>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight" dangerouslySetInnerHTML={{ __html: t('about.heading').replace('<br/>', '<br/>') }} />
            <h3 className="text-xl md:text-2xl text-gray-400 font-medium mb-8">
              {t('about.subheading')}
            </h3>
            
            <div className="space-y-6 text-gray-300 font-body leading-relaxed text-lg text-justify md:text-left max-w-2xl">
              <p dangerouslySetInnerHTML={{ __html: t('about.text1') }} />
              <p dangerouslySetInnerHTML={{ __html: t('about.text2') }} />
              <p dangerouslySetInnerHTML={{ __html: t('about.text3') }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;