import About from '@/components/About';
import FeaturedFoods from '@/components/FeaturedFoods';
import Header from '@/components/Header';
import Home from '@/components/Home';
import Special from '@/components/Special';
import Menu from '@/components/Menu';
import Experience from '@/components/Experience';
const index = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <FeaturedFoods />
      <Special />
      <Menu />
      <Experience />
    </>
  );
};

export default index;
