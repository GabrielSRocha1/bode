import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

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
                  src="Img-site.png" 
                  alt="Brotherhood on the road" 
                  className="rounded-lg shadow-2xl w-full h-auto object-contain max-h-[600px]"
                />
             </div>
          </div>
          
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {t('payment.heading')}
            </h2>
            <h3 className="text-xl md:text-2xl text-gray-400 font-medium mb-8">
              {t('payment.subheading')}
            </h3>
            
            <div className="space-y-8 text-gray-300 font-body leading-relaxed text-lg text-justify md:text-left max-w-2xl">
              <p>{t('payment.text1')}</p>
              <p>{t('payment.text2')}</p>
              <p>{t('payment.text3')}</p>
            </div>
          </div>
        </div>
        
        {/* Download Section */}
        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Google Play Section */}
            <div className="bg-white rounded-xl p-6 shadow-xl">
              <div className="flex items-center justify-center gap-4">
                <div className="flex flex-col items-center">
                  <img src="/google.png" alt="Google Play" className="h-16 w-auto object-contain" />
                </div>
                
                <a 
                  href="https://okx.com/pt-br/join/69600528" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-col items-center hover:opacity-80 transition-opacity"
                >
                  <img src="/cartão-G.png" alt="Cartão" className="h-16 w-auto object-contain" />
                </a>
                
                <a 
                  href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://play.google.com/store/apps/details%3Fid%3Dcom.okx.wallet%26referrer%3Dutm_source%253Dgoogle%2526utm_medium%253Dorganic%2526utm_term%253Dokx%2Bwallet%26pcampaignid%3DAPPU_1_WL4wabi1LPHT1sQP7ePYUA&ved=2ahUKEwi4wdWjwKKRAxXxqZUCHe0xFgoQ8oQBegQIIRAB&usg=AOvVaw2oGUOscr9PwGQtUishTeMJ" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-col items-center hover:opacity-80 transition-opacity"
                >
                  <img src="/wallet-G.png" alt="Wallet" className="h-16 w-auto object-contain" />
                </a>
              </div>
            </div>

            {/* App Store Section */}
            <div className="bg-white rounded-xl p-6 shadow-xl">
              <div className="flex items-center justify-center gap-4">
                <div className="flex flex-col items-center">
                  <img src="/google-A.png" alt="App Store" className="h-16 w-auto object-contain" />
                </div>
                
                <a 
                  href="https://apps.apple.com/us/app/okx-buy-bitcoin-btc-crypto/id1327268470" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-col items-center hover:opacity-80 transition-opacity"
                >
                  <img src="/cartão-A.png" alt="Cartão" className="h-16 w-auto object-contain" />
                </a>
                
                <a 
                  href="https://apps.apple.com/us/app/okx-wallet-crypto-web3/id6743309484" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-col items-center hover:opacity-80 transition-opacity"
                >
                  <img src="/wallet-A.png" alt="Wallet" className="h-16 w-auto object-contain" />
                </a>
              </div>
            </div>

            {/* YouTube Section */}
            <div className="bg-white rounded-xl p-6 shadow-xl flex items-center justify-center">
              <a 
                href="https://www.youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center hover:opacity-80 transition-opacity"
              >
                <img src="/Frame 10.png" alt="YouTube" className="h-16 w-auto object-contain" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;