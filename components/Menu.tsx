import React from 'react';

const Menu = () => {
  const menuItems = [
    {
      category: 'main course',
      items: [
        {
          name: 'Super-Delicious Zuppa Toscana',
          ingredients: 'Chicken • Italian • Sausage • Spinach',
          price: 40,
        },
        {
          name: 'Bacon coil baked Australian chicken',
          ingredients: 'Chicken • Italian • Sausage • Spinach',
          price: 40,
        },
        // Adicione mais itens do menu principal aqui
      ],
    },
    {
      category: 'Desserts',
      items: [
        {
          name: 'Apple Pie',
          ingredients: 'Apple • Cinnamon • Ice Cream • Veg',
          price: 40,
        },
        {
          name: 'Almond Malai Kulfi',
          ingredients: 'Dry Fruits • Condensed Milk • Saffron • Veg',
          price: 44,
        },
        // Adicione mais itens de sobremesas aqui
      ],
    },
    {
      category: 'Soups & Salads',
      items: [
        {
          name: 'Corn Chowder & Arugula Pear Salad',
          ingredients: 'Corn • Veg • Oyster • Veg',
          price: 50,
        },
        {
          name: 'Cheesy Chicken Enchilada Soup',
          ingredients: 'Chicken • Southwestern • Soup • Tex-Mex',
          price: 55,
        },
        // Adicione mais itens de sopas e saladas aqui
      ],
    },
    {
      category: 'Drinks',
      items: [
        { name: 'Novotel filtered water', ingredients: '750ml', price: 1.5 },
        {
          name: 'Schweppes baby mixers',
          ingredients: '125ml • Tonic • Bitter Lemon • Slimline Tonic',
          price: 1.55,
        },
        // Adicione mais itens de bebidas aqui
      ],
    },
  ];

  return (
    <section id="menu">
      <h4 className="font-lobster text-normal text-xl leading-6 text-title capitalize w-full flex justify-center pt-24">
        About us
        <p className="border-b-2 border-theme w-12 relative left-3 bottom-2"></p>
      </h4>
      <h3 className="font-inter text-normal text-3xl text-title capitalize pt-2 flex justify-center">
        our featured food
      </h3>
      <div className="2xl:px-360 xl:px-280 lg:px-120 md:px-28 px-10 grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 py-16 flex">
        {menuItems.map((category, index) => (
          <div key={index} className="md:pl-5">
            <h3 className="font-lobster text-normal text-3xl capitalize text-theme pt-12">
              {category.category}
            </h3>
            {category.items.map((item, idx) => (
              <div key={idx} className="grid grid-cols-3 pt-5">
                <div className="col-span-2">
                  <h4 className="font-inter text-normal text-xl text-description capitalize">
                    {item.name}
                    <p className="font-inter text-normal text-sm text-black capitalize pt-3">
                      {item.ingredients}
                    </p>
                  </h4>
                </div>
                <div className="flex justify-end col-span-1 items-start">
                  <p className="border-b border-description w-40 mr-5 ml-2 relative top-3"></p>
                  <p className="font-inter text-normal text-xl text-description capitalize">
                    ${item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
