import {Navbar, Hero, About, Services, Contact, Footer} from './components';
import {BrowserRouter} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0">
        {/* <div className="relative"> */}
        <div className="bg-[url('/src/assets/hero.jpg')] bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Services />
        <div className="relative">
          <Contact />
          <Footer />
        </div>
        {/* </div> */}
      </div>
    </BrowserRouter>
  );
};

export default App;
