import React, { useRef } from 'react';
import FoodCard from './FoodCard';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const FeaturedFoods = () => {
  const [slidesToShow, setSlidesToShow] = React.useState<number>(4);
  const sliderRef = React.useRef<Slider>(null);

  React.useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth >= 1200) {
        setSlidesToShow(4);
      } else if (screenWidth >= 768) {
        setSlidesToShow(3);
      } else if (screenWidth <= 767) {
        setSlidesToShow(1);
      }
    };

    handleResize();

    const resizeListener = () =>
      window.addEventListener('resize', handleResize);

    resizeListener();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  interface Cardapio {
    img: string;
    title: string;
    stars: number;
  }
  const cardapio: Cardapio[] = [
    { img: '/images/food-1.png', title: 'Tuna Fish Salad', stars: 4 },
    {
      img: '/images/food-2.png',
      title: 'Cheesy Chicken Burger Large ',
      stars: 3,
    },
    { img: '/images/food-3.png', title: 'Veg Cheesy Sandwich', stars: 4 },
    { img: '/images/food-4.png', title: 'Juicy Fried Chicken', stars: 4 },
    { img: '/images/food-1.png', title: 'Tuna Fish Salad 2', stars: 4 },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
  };

  const goToPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <section id="featured-foods">
      <div className="2xl:px-360 xl:px-280 lg:px-120 md:px-28 px-10 pt-12">
        <h4 className="font-lobster text-normal text-xl leading-6 text-title  capitalize">
          About us
          <p className="border-b-2 border-theme w-12 relative left-20 bottom-2"></p>
        </h4>
        <h3 className="font-inter text-normal text-3xl text-title capitalize pt-2">
          our featured food
        </h3>
        <div className="flex justify-end pb-2 relative 2xl:bottom-12 xl:bottom-12 lg:bottom-12 md:bottom-12 bottom-0 pt-3">
          <button
            onClick={goToPrev}
            className="w-50 h-50 rounded-md bg-previus flex justify-center items-center shadow-lg"
          >
            <FontAwesomeIcon
              icon={faChevronLeft}
              style={{ color: '#302837' }}
            />
          </button>
          <button
            onClick={goToNext}
            className="ml-2 w-50 h-50 rounded-md bg-description flex justify-center items-center shadow-lg"
          >
            <FontAwesomeIcon
              icon={faChevronRight}
              style={{ color: '#FF5311' }}
            />
          </button>
        </div>
        <div className="pb-14 w-full">
          <Slider ref={sliderRef} {...settings} className="overflow-hidden">
            {cardapio.map((prato, index) => (
              <div key={index}>
                <FoodCard
                  img={prato.img}
                  title={prato.title}
                  star={prato.stars}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default FeaturedFoods;
