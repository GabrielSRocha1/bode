import React from 'react';

const images = [
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbZCKy7FPhEmhExFlu182u28Ubq73g7kihwA&s",
    label: "Liberdade",
    alt: "Estrada aberta"
  },
  {
    src: "images (1) bodes 1.jpg",
    label: "Irmandade",
    alt: "Grupo de motos"
  },
  {
    src: "site (1).png", // Using a tech-ish abstract or futuristic bike part
    label: "Futuro",
    alt: "Tecnologia"
  }
];

const Gallery: React.FC = () => {
  return (
    <section className="py-0">
      <div className="grid grid-cols-1 md:grid-cols-3 h-[500px]">
        {images.map((img, idx) => (
          <div key={idx} className="relative group overflow-hidden h-full">
            <img 
              src={img.src} 
              alt={img.alt} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/30 transition-colors flex items-center justify-center">
              <h3 className="text-white text-3xl font-bold uppercase tracking-widest border-2 border-white/20 px-6 py-2 bg-black/20 backdrop-blur-sm group-hover:border-gold-500 group-hover:text-gold-500 transition-all">
                {img.label}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;