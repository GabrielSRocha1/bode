import React from 'react';

const Hero: React.FC = () => {
  return (
    <div id="comprar" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-dark-900 py-12 sm:py-0">
      
      {/* Background Image Only */}
      <div 
        className="absolute inset-0 bg-contain sm:bg-cover bg-center bg-no-repeat z-0 min-h-[calc(100vh-6rem)] sm:min-h-[100vh]"
        style={{ 
          backgroundImage: 'url("/bodes.png")',
        }}
      >
        {/* Very light overlay to ensure Navbar visibility, but keeping image pure */}
        <div className="absolute inset-0 bg-black/20 sm:bg-black/15 md:bg-black/20"></div>
      </div>

    </div>
  );
};

export default Hero;