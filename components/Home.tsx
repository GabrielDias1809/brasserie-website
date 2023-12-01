import React from 'react';

const Home = () => {
  return (
    <section className="pt-20">
      <div
        className="h-auto"
        style={{
          backgroundImage: "url('/images/homeBanner.png')",
          backgroundSize: 'cover', // Para ajustar o tamanho da imagem
          backgroundPosition: 'center', // Para posicionar a imagem
          // Outros estilos de plano de fundo podem ser adicionados conforme necessário
        }}
      >
        <div className="2xl:px-360 xl:px-280 lg:px-120 md:px-28 px-10">
          <h4 className="font-lobster text-normal text-xl leading-6 text-white pt-32">
            Discover your taste
          </h4>
          <h2 className="font-inter text-5xl text-white font-normal pt-3 pb-2">
            Eat Healthy and
          </h2>
          <h2 className="font-inter text-5xl text-white font-normal capitalize">
            natural Foods
          </h2>
          <button className="font-inter text-sm text-white font-normal capitalize text-center py-5 px-7 bg-theme rounded-md mt-10 mb-32">
            Discover Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
