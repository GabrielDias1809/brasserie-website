import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faStar } from '@fortawesome/free-solid-svg-icons';

const FoodCard: React.FC<{ star: number; title: string; img: string }> = ({
  star,
  title,
  img,
}) => {
  const stars: number = star;
  const renderStars = () => {
    const starArray = [];
    for (let i = 0; i < stars; i++) {
      starArray.push(
        <FontAwesomeIcon
          key={i}
          icon={faStar}
          style={{ color: '#008000' }}
          className="relative bottom-3"
        />,
      );
    }
    return starArray;
  };
  const renderGrayStars = () => {
    const starArray = [];
    const grayStar: number = 5 - stars;
    for (let i = 0; i < grayStar; i++) {
      starArray.push(
        <FontAwesomeIcon
          key={i}
          icon={faStar}
          style={{ color: 'gray' }}
          className="relative bottom-3"
        />,
      );
    }
    return starArray;
  };

  return (
    <div className="w-full h-auto p-2">
      <img src={img} alt="" className="w-full h-auto" />
      <div className="">
        <div className="flex">
          <p className="font-inter text-normal text-lg truncate text-black pt-3">
            {title}
          </p>
          <div className="flex-1"></div>
          <div className="w-50 h-14 bg-theme flex items-center justify-center hover:bg-darkTheme">
            <FontAwesomeIcon icon={faAngleRight} color="white" />
          </div>
        </div>
        <div className="relative bottom-2">
          {renderStars()}
          {renderGrayStars()}
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
