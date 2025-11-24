import React from 'react';

const Hero: React.FC = () => {
  return (
    <div id="comprar" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-dark-900">
      
      {/* Background Image Only */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: 'url("/bodes.png")', 
        }}
      >
        {/* Very light overlay to ensure Navbar visibility, but keeping image pure */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

    </div>
  );
};

export default Hero;