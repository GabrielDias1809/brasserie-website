import React, { MouseEventHandler } from 'react';

const Header = () => {
  const [open, setOpen] = React.useState(false);

  function handleHeader(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) {
    setOpen(!open);
  }
  return (
    <nav className="w-full flex items-center justify-between flex-wrap bg-header py-4 px-6 2xl:px-360 xl:px-280 lg:px-120 shadow-lg fixed">
      <div className="flex items-center flex-shrink-0 text-white">
        <svg
          className="fill-current h-8 w-8 mr-2"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
        </svg>
        <span className="font-lobster text-3xl tracking-tight">Brasserie</span>
      </div>
      <div className="block lg:hidden transition-full duration-300 ease-in">
        <button
          className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white mt-4 mb-4"
          onClick={handleHeader}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`${
          open ? ' block' : 'hidden'
        } lg:flex lg:items-center lg:w-auto w-full flex-grow transition-all duration-500 ease-in-out justify-end`}
      >
        <div className="text-sm lg:flex-grow text-center  lg:text-end">
          <a
            href="#responsive-header"
            className="block capitalize mt-4 mb-4 font-inter font-normal text-white lg:inline-block lg:mr-4 text-teal-200 hover:text-white no-underline"
          >
            About Us
          </a>
          <a
            href="#responsive-header"
            className="block capitalize mt-4 font-inter font-normal text-white lg:inline-block lg:mr-4 text-teal-200 hover:text-white no-underline"
          >
            menu
          </a>
          <a
            href="#responsive-header"
            className="block capitalize mt-4 mb-4 font-inter font-normal text-white lg:inline-block lg:mr-4 text-teal-200 hover:text-white no-underline"
          >
            pages
          </a>
          <a
            href="#responsive-header"
            className="block capitalize mt-4 mb-4 font-inter font-normal text-white lg:inline-block lg:mr-4 text-teal-200 hover:text-white no-underline"
          >
            news
          </a>
          <a
            href="#responsive-header"
            className="block capitalize mt-4 mb-4 font-inter font-normal text-white lg:inline-block lg:mr-4 text-teal-200 hover:text-white no-underline"
          >
            contact us
          </a>
        </div>
        <div className="justify-center flex">
          <button className="font-inter font-normal text-theme bg-transparent border-2 border-theme flex items-center justify-center rounded-md w-40 h-12 transition-all duration-200 ease-in-out hover:bg-theme hover:text-white">
            Table Booking
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
