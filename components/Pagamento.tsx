import React, { useState } from 'react';

const Pagamento: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const linkToCopy = 'AeAQdgjGqtHErysb5FBvUxNxmob2mVBGnEXdmULJ7dH9';

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
    <section id="pagamento" className="py-24 bg-dark-900 min-h-[50vh]">
      <div id="pagamento-imagens" className="max-w-[90%] xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white text-center leading-tight mb-12">
          Nós da BodeCoin Usamos Cartão Global
        </h2>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-12">
          {/* Container Esquerdo */}
          <div className="bg-dark-800 p-4 sm:p-8 rounded-2xl border border-gold-500/20 min-h-[300px] flex flex-col items-center justify-center gap-6">
            <img
              src="/gemini sem logo.png"
              alt="Solflare Card"
              className="max-w-full max-h-[675px] object-contain rounded-lg shadow-lg"
            />
            <div className="flex gap-4 sm:gap-8 w-full justify-center items-start mt-4">
              {/* Card 1: Stores */}
              <div className="flex flex-col items-center gap-2 w-[120px] sm:w-[180px]">
                <div className="bg-white p-2 sm:p-4 rounded-xl shadow-lg w-full aspect-[4/5] flex items-center justify-center overflow-hidden">
                  <img
                    src="/card-stores-opt.png"
                    alt="App Store & Google Play"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Card 2: Peça seu cartão */}
              <div className="flex flex-col items-center gap-2 w-[120px] sm:w-[180px]">
                <a
                  href="https://www.solflare.com/guides/how-to-use-the-solflare-card/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-2 sm:p-4 rounded-xl shadow-lg w-full aspect-[4/5] flex items-center justify-center overflow-hidden hover:opacity-80 transition-opacity"
                >
                  <img
                    src="/card-solflare-opt.png"
                    alt="Peça seu cartão"
                    className="w-full h-full object-contain"
                  />
                </a>
              </div>

              {/* Card 3: ID Bodecoin */}
              <div className="flex flex-col items-center gap-2 w-[120px] sm:w-[180px]">
                <button
                  onClick={handleCopyLink}
                  className="bg-white p-2 sm:p-4 rounded-xl shadow-lg w-full aspect-[4/5] flex items-center justify-center hover:opacity-80 transition-opacity relative group"
                  title={copied ? 'ID copiado!' : 'Clique para copiar o ID'}
                >
                  <img
                    src="/card-id-opt.png"
                    alt="Copie e cole ID"
                    className="w-full h-full object-contain rounded-lg"
                  />
                  {copied && (
                    <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 z-50">
                      <div className="bg-green-500 text-white text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded-full shadow-2xl whitespace-nowrap animate-bounce border-2 border-white">
                        ✓ ID Copiado!
                      </div>
                      <div className="w-2 h-2 bg-green-500 rotate-45 absolute -bottom-1 left-1/2 transform -translate-x-1/2 border-r-2 border-b-2 border-white"></div>
                    </div>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Container Direito */}
          <div className="bg-dark-800 p-4 sm:p-8 rounded-2xl border border-gold-500/20 min-h-[300px] flex flex-col items-center justify-center gap-6">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center">
              Vídeos de Instruções
            </h3>
            <img
              src="/pagamento-moeda-stats.jpg"
              alt="BodeCoin Stats"
              className="max-w-full max-h-[675px] object-contain rounded-lg shadow-lg"
            />
            <div className="flex gap-4 sm:gap-8 w-full justify-center items-start mt-4">
              {/* Card 1: Como Baixar */}
              <div className="flex flex-col items-center gap-2 w-[120px] sm:w-[180px]">
                <a
                  href="https://youtu.be/R7AYEo-G7yM?si=KHL1O8ow9K04CvlC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-2 sm:p-4 rounded-xl shadow-lg w-full aspect-[4/5] flex items-center justify-center overflow-hidden hover:opacity-80 transition-opacity"
                >
                  <img
                    src="/card-baixar-video.png"
                    alt="Como baixar sua carteira"
                    className="w-full h-full object-contain"
                  />
                </a>
              </div>

              {/* Card 2: Como Comprar */}
              <div className="flex flex-col items-center gap-2 w-[120px] sm:w-[180px]">
                <a
                  href="https://youtu.be/5XdCza0F_4A?si=jXHwH7QzKmhg3-mI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-2 sm:p-4 rounded-xl shadow-lg w-full aspect-[4/5] flex items-center justify-center overflow-hidden hover:opacity-80 transition-opacity"
                >
                  <img
                    src="/card-comprar-video.png"
                    alt="Como Comprar BodeCoin"
                    className="w-full h-full object-contain"
                  />
                </a>
              </div>

              {/* Card 3: ID Bodecoin */}
              <div className="flex flex-col items-center gap-2 w-[120px] sm:w-[180px]">
                <button
                  onClick={handleCopyLink}
                  className="bg-white p-2 sm:p-4 rounded-xl shadow-lg w-full aspect-[4/5] flex items-center justify-center hover:opacity-80 transition-opacity relative group"
                  title={copied ? 'ID copiado!' : 'Clique para copiar o ID'}
                >
                  <img
                    src="/card-id-opt.png"
                    alt="Copie e cole ID"
                    className="w-full h-full object-contain rounded-lg"
                  />
                  {copied && (
                    <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 z-50">
                      <div className="bg-green-500 text-white text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded-full shadow-2xl whitespace-nowrap animate-bounce border-2 border-white">
                        ✓ ID Copiado!
                      </div>
                      <div className="w-2 h-2 bg-green-500 rotate-45 absolute -bottom-1 left-1/2 transform -translate-x-1/2 border-r-2 border-b-2 border-white"></div>
                    </div>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default Pagamento;
