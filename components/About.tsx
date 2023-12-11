import React from 'react';

const About = () => {
  return (
    <section id="about-us">
      <div
        className="h-auto"
        style={{
          backgroundImage: "url('/images/aboutBanner.png')",
          backgroundSize: 'cover', // Para ajustar o tamanho da imagem
          backgroundPosition: 'center', // Para posicionar a imagem
          // Outros estilos de plano de fundo podem ser adicionados conforme necessário
        }}
      >
        <div className="2xl:px-360 xl:px-280 lg:px-120 md:px-28 px-10 grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1  pt-16">
          <div className="relative justify-center pt-20 hidden lg:flex">
            <div className="relative w-3/4 h-3/4 pl-32">
              <img
                src="/images/restaurant-1.jpg"
                alt=""
                className="absolute inset-0 z-0 m-auto"
              />
              <img
                src="/images/restaurant-2.jpg"
                alt=""
                className="absolute inset-0 z-10 opacity-100 hover:opacity-0 transition-all duration-300 ease-in m-auto"
              />
            </div>
          </div>

          <div>
            <h4 className="font-lobster text-normal text-xl leading-6 text-title capitalize">
              About us
              <p className="border-b-2 border-theme w-12 relative left-20 bottom-2"></p>
            </h4>

            <h3 className="font-inter text-5xl text-title font-normal pt-3 pb-2 capitalize">
              we are tasty
            </h3>
            <p className="font-inter text-sm text-title font-normal pb-2 pt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="font-inter text-sm text-title font-normal pb-7 pt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              vulputate magna ac dolor condimentum feugiat. Nulla porta risus
              condimentum, mollis orci ac, tempor sem. Nunc malesuada neque id
              lectus efficitur vestibulum. Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum
              sit amet eros quis risus mattis bibendum vitae eget ante. Nam
              tempor maximus pellentesque. Mauris sed felis vitae ante lobortis
              pretium. Suspendisse potenti. Nullam sed lorem vel nibh porta
              mollis.
            </p>
            <button className="font-inter text-sm text-white font-normal capitalize text-center bg-theme rounded-md mt-10 mb-20 w-40 h-12 shadow-lg">
              Discover Menu
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
