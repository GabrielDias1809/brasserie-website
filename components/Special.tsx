import React from 'react';

const Special = () => {
  return (
    <>
      <div
        className="h-auto"
        style={{
          backgroundImage: "url('/images/specialBanner.png')",
          backgroundSize: 'cover', // Para ajustar o tamanho da imagem
          backgroundPosition: 'center', // Para posicionar a imagem
          // Outros estilos de plano de fundo podem ser adicionados conforme necessário
        }}
      >
        <div className="2xl:px-360 xl:px-280 lg:px-120 md:px-28 px-10 grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 pt-16 pb-16">
          <div className="2xl:w-600 h-auto bg-white rounded-xl p-8">
            <h4 className="font-lobster text-normal text-xl leading-6 text-title  capitalize">
              special recipes
              <p className="border-b-2 border-theme w-12 relative left-32 bottom-2"></p>
            </h4>
            <h3 className="font-inter text-normal text-3xl pt-3">
              Taste of Precious
            </h3>
            <p className="font-inter text-normal text-xs md:text-sm text-black pt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="font-inter text-normal text-normal text-xs md:text-sm text-black pt-5">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <button className="font-inter text-sm text-white font-normal capitalize text-center bg-theme rounded-md w-36 h-12 shadow-lg mt-7">
              check now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Special;
