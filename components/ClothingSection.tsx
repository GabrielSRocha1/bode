import React, { useCallback } from 'react';

const ClothingSection: React.FC = () => {
  const clothingImages = [
    '/Gemini_Generated_Image_1atbjb1atbjb1atb.png',
    '/Gemini_Generated_Image_3aubb43aubb43aub.png',
    '/Gemini_Generated_Image_3x9nfo3x9nfo3x9n.png',
    '/Gemini_Generated_Image_4hcsns4hcsns4hcs.png',
    '/Gemini_Generated_Image_7c4qts7c4qts7c4q.png',
    '/Gemini_Generated_Image_fib8kzfib8kzfib8.png',
    '/Gemini_Generated_Image_gk652hgk652hgk65.png',
    '/Gemini_Generated_Image_phfzrmphfzrmphfz.png',
    '/Gemini_Generated_Image_r3u1por3u1por3u1.png',
    '/Gemini_Generated_Image_trio39trio39trio.png',
    '/Gemini_Generated_Image_xsfbkgxsfbkgxsfb.png',
    '/Gemini_Generated_Image_z2rg1lz2rg1lz2rg.png',
    '/Gemini_Generated_Image_r3u1por3u1por3u1 (1).png'
  ];

  const handleScrollToPayment = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById('pagamento-imagens');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      window.location.hash = '#pagamento-imagens';
    }
  }, []);

  // Dividir em duas linhas: 8 em cima, 5 em baixo (ou 8 se tiver mais imagens)
  const topRow = clothingImages.slice(0, 8);
  const bottomRow = clothingImages.slice(8, 13);

  return (
    <section className="py-16 bg-dark-900">
      <div className="max-w-[90%] xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
          Na Compra de BODECoin Voce Ganha Produtos da Grif. Bode Coin
        </h2>
        <div className="space-y-4">
          {/* Primeira linha - 8 imagens centralizadas */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {topRow.map((image, index) => (
              <div key={index} className="flex-shrink-0">
                <img
                  src={image}
                  alt={`Roupa ${index + 1}`}
                  className="h-24 md:h-32 w-auto object-contain rounded-lg hover:opacity-90 transition-opacity"
                />
              </div>
            ))}
          </div>

          {/* Segunda linha - 5 imagens centralizadas (ou 8 se tiver mais) */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {bottomRow.map((image, index) => (
              <div key={index + 8} className="flex-shrink-0">
                <img
                  src={image}
                  alt={`Roupa ${index + 9}`}
                  className="h-24 md:h-32 w-auto object-contain rounded-lg hover:opacity-90 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="#pagamento-imagens"
            onClick={handleScrollToPayment}
            className="inline-block bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-xl font-extrabold text-xl sm:text-2xl transition-all transform hover:scale-105 cursor-pointer"
          >
            Comprar Agora
          </a>
        </div>
      </div>
    </section>
  );
};

export default ClothingSection;

