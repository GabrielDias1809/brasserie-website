import React, { useEffect, useRef, useState } from 'react';

interface Item {
  name: string;
  img: string;
  price: number;
}

interface ItemListProps {
  items: Item[];
  active: string;
  category: string;
}

const ItemList: React.FC<ItemListProps> = ({ items, active, category }) => {
  const [loadedImages, setLoadedImages] = useState<{ [key: string]: boolean }>(
    {},
  );
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const newLoadedImages: { [key: string]: boolean } = {};
    items.forEach((item) => {
      if (loadedImages[item.img]) {
        newLoadedImages[item.img] = true;
      } else {
        const img = new Image();
        img.src = item.img;
        img.onload = () => {
          setLoadedImages((prevLoadedImages) => ({
            ...prevLoadedImages,
            [item.img]: true,
          }));
        };
        img.onerror = () => {
          setLoadedImages((prevLoadedImages) => ({
            ...prevLoadedImages,
            [item.img]: false,
          }));
        };
      }
    });
  }, [items, loadedImages]);

  return (
    <>
      {items.map((item, index) => (
        <div
          key={`${category}-${index}`}
          className={`${
            (active === category || active === 'all') && loadedImages[item.img]
              ? 'block h-auto'
              : 'hidden'
          }`}
        >
          <img
            src={item.img}
            alt={item.name}
            className="block w-full h-auto inset-0 z-0"
          />
          <div className="inset-0 z-10 relative bottom-40">{item.name}</div>
        </div>
      ))}
    </>
  );
};

export default ItemList;
