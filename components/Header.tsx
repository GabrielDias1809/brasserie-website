import React, { MouseEventHandler } from 'react';

const Header = () => {
  const [open, setOpen] = React.useState(false);
  const [menu, setMenu] = React.useState(false);

  function handleHeader(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) {
    setOpen(!open);
  }

  //scroll suave até a section
  if (typeof document !== 'undefined') {
    const internalLinks: NodeListOf<HTMLAnchorElement> =
      document.querySelectorAll('.js-menu a[href^="#"]');

    const scrollToSection = (event: MouseEvent) => {
      event.preventDefault();
      const link = event.currentTarget as HTMLAnchorElement;
      if (link) {
        const href = link.getAttribute('href') as string;
        if (href) {
          const section = document.querySelector(href) as HTMLElement;

          if (section) {
            const topo = section.offsetTop - 100;
            window.scrollTo({
              top: topo,
              behavior: 'smooth',
            });
          }
        }
      }
      setMenu(false);
      if (link?.firstChild?.textContent !== 'brasserie') {
        setOpen(!open);
      }
    };

    React.useEffect(() => {
      internalLinks.forEach((link) => {
        link.addEventListener('click', scrollToSection);
      });

      return () => {
        internalLinks.forEach((link) => {
          link.removeEventListener('click', scrollToSection);
        });
      };
    }, [internalLinks]);
  }

  return (
    <nav className="w-full flex items-center justify-between flex-wrap bg-header py-4 px-6 2xl:px-360 xl:px-280 lg:px-120 shadow-lg fixed js-menu z-50">
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
        <a href="#home">
          <span className="font-lobster text-3xl tracking-tight capitalize">
            brasserie
          </span>
        </a>
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
          open ? ' block transition-all duration-500 ease-in-out' : 'hidden'
        } lg:flex lg:items-center lg:w-auto w-full flex-grow  justify-end`}
      >
        <div className="text-sm lg:flex-grow text-center lg:text-end ">
          <a
            href="#home"
            className="block capitalize mt-4 mb-4 font-inter font-normal text-white lg:inline-block lg:mr-4 text-teal-200 hover:text-white no-underline"
          >
            Home
          </a>
          <a
            href="#about-us"
            className="block capitalize mt-4 font-inter font-normal text-white lg:inline-block lg:mr-4 text-teal-200 hover:text-white no-underline"
          >
            About Us
          </a>
          <a
            href="#featured-foods"
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
