import {Navbar, Hero, About, Testimonials, Contact, Footer} from './components';
import {BrowserRouter} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 ">
        <div className="relative">
          <Navbar />
          <Hero />
          <About />
          <Testimonials />
          <div className="relative">
            <Contact />
            <Footer />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
