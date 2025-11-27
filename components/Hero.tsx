import React from 'react';

const Hero: React.FC = () => {
  return (
    <div id="comprar" className="relative w-full overflow-hidden bg-dark-900 sm:min-h-screen">
      {/* Mobile: Container que acompanha o tamanho da imagem */}
      <div className="relative w-full aspect-[4/3] sm:hidden">
        <div 
          className="absolute inset-0 bg-contain bg-center bg-no-repeat z-0"
          style={{ 
            backgroundImage: 'url("/bodes.png")',
          }}
        >
          {/* Very light overlay to ensure Navbar visibility, but keeping image pure */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      </div>
      
      {/* Desktop: Background Image Full Screen */}
      <div 
        className="hidden sm:block absolute inset-0 bg-cover bg-center bg-no-repeat z-0 min-h-[100vh]"
        style={{ 
          backgroundImage: 'url("/bodes.png")', 
        }}
      >
        {/* Very light overlay to ensure Navbar visibility, but keeping image pure */}
        <div className="absolute inset-0 bg-black/15 md:bg-black/20"></div>
      </div>

    </div>
  );
};

export default Hero;