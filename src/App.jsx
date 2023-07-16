import { BrowserRouter } from 'react-router-dom';
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Projects,
} from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 !overflow-x-hidden">
        <div>
          <Navbar />
          <Hero />
        </div>

        <div className="bg-[#0f0e0f] bg-cover bg-center bg-no-repeat">
          <About />
        </div>

        <div className=" bg-gradient-to-t from-[#28282B] to-[#0f0e0f] bg-cover bg-center bg-no-repeat pb-10">
          <Tech />
        </div>

        {/* <Projects /> */}

        <div
          className="bg-experience bg-cover bg-center bg-no-repeat 
            rounded-tl-[150px] rounded-br-[150px]">
          <div id='experience'
            className="bg-experienceLight mt-[3rem] bg-cover bg-center 
            bg-no-repeat rounded-tl-[130px] rounded-br-[130px]">
            <Experience />
          </div>
        </div>
        <div className="">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
