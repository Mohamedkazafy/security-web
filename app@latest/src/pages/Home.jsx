import Hero from '../components/Herp';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <main className=' bg-green-400'>
      <Hero />
      <Services />
      <Testimonials />
    </main>
  );
};

export default Home;
