import {Navbar, Hero, About, Services, Contact, Footer} from './components';
import {BrowserRouter} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-[#FFF6E9]">
        {/* <div className="relative"> */}
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Services />
        <div className="relative">
          {/* <Contact /> */}
          <Footer />
        </div>
        {/* </div> */}
      </div>
    </BrowserRouter>
  );
};

export default App;
