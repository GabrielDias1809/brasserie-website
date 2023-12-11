import React, { ButtonHTMLAttributes } from 'react';
import ItemList from './ItemList';

const Experience: React.FC = () => {
  const [active, setActive] = React.useState<string>('all');

  const handleClick = (category: string) => {
    setActive(category);
  };
  type MenuItem = {
    category: string;
    items: {
      name: string;
      img: string;
      price: number;
    }[];
  };
  const menuItems: MenuItem[] = [
    {
      category: 'all',
      items: [],
    },
    {
      category: 'breakfast',
      items: [
        {
          name: 'tuna fish salad',
          img: '/images/food-1.png',
          price: 19,
        },
      ],
    },
    {
      category: 'salads',
      items: [
        {
          name: 'Cheesy Chicken Burguer',
          img: '/images/food-2.png',
          price: 15,
        },
      ],
    },
    {
      category: 'meat',
      items: [
        {
          name: 'Veg Cheesy Sandwich',
          img: '/images/food-3.png',
          price: 11,
        },
      ],
    },
    {
      category: 'soups',
      items: [
        {
          name: 'Juicy Fried Chicken',
          img: '/images/food-4.png',
          price: 20,
        },
      ],
    },
    {
      category: 'desserts',
      items: [
        {
          name: 'Chicken Nuggets with French Fries',
          img: '/images/food-5.png',
          price: 8,
        },
        {
          name: 'Veg Chow Mean Pasta',
          img: '/images/food-7.png',
          price: 10,
        },
      ],
    },
    {
      category: 'drinks',
      items: [
        { name: 'Spicy Mayo Pasta', img: '/images/food-6.png', price: 15 },
        {
          name: 'Italian Fried Chicken',
          img: '/images/food-8.png',
          price: 12,
        },
      ],
    },
  ];

  return (
    <>
      <section id="special">
        <div className="2xl:px-360 xl:px-280 lg:px-120 md:px-28 px-10 pt-32">
          <h4 className="font-lobster text-normal text-xl leading-6 text-title capitalize">
            Delightful
            <p className="border-b-2 border-theme w-12 relative left-20 bottom-2"></p>
          </h4>
          <h3 className="font-inter text-normal text-3xl text-title capitalize pt-2">
            Experience
          </h3>
        </div>
        <div className="hidden md:block 2xl:px-360 xl:px-280 lg:px-120 md:px-28 px-10 pt-12 md:grid md:grid-cols-7 md:flex 2xl:gap-24 xl:gap-20 lg:gap-16 md:gap-12">
          {menuItems.map(({ category }) => (
            <button
              key={category}
              className={`font-lobster text-normal text-xl text-description ${
                active === category && 'border-b-2 border-theme'
              }`}
              onClick={() => handleClick(category)}
            >
              {category === 'all' ? 'All' : category}
            </button>
          ))}
        </div>

        <div className="px-10 md:hidden w-1/2 pt-8">
          <label htmlFor="menu" className="sr-only">
            Choose a Menu
          </label>
          <select
            id="menu"
            name="menu"
            className="block w-full px-4 py-2 border-2 border-theme rounded-md shadow-sm focus:outline-none focus:border-theme font-lobster text-normal text-base"
            value={active}
            onChange={(e) => setActive(e.target.value)}
          >
            {menuItems.map(({ category }) => (
              <option key={category} value={category}>
                {category === 'all' ? 'All' : category}
              </option>
            ))}
          </select>
        </div>
        <div className="2xl:px-360 xl:px-280 lg:px-120 md:px-28 px-11 grid grid-cols-1 2xl:grid-cols-4 gap-3 pt-9 h-600 pb-20">
          {menuItems.map(({ category, items }) => (
            <>
              <ItemList
                key={category}
                items={items}
                active={active}
                category={category}
              />
            </>
          ))}
        </div>
      </section>
    </>
  );
};

export default Experience;
