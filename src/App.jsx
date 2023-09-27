import {
  Navbar,
  Hero,
  HeroPattern,
  About,
  Services,
  Contact,
  Footer,
} from './components';

import {BrowserRouter} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0">
        <div className="bg-gradient-to-b from-teal-400 via-blue-400 to-transparent ">
          <HeroPattern />
          <Navbar />
          <Hero />
        </div>
        <About />
        <Services />
        <div className="relative">
          <Contact />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
