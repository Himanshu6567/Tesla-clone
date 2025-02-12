import Carga from "./components/Carga";
import Footer from "./components/Footer";
import LandingHeader from "./components/LandingHeader";
import MainSection from "./components/MainSection";
import Model3 from "./components/Model3";
import ModelS from "./components/ModelS";
import ModelX from "./components/ModelX";
import ModelY from "./components/ModelY";
import Powerwall from "./components/Powerwall";

function App() {
  return (
    <>
      <LandingHeader />

      <div className="relative flex h-screen w-full snap-y snap-mandatory flex-col overflow-x-hidden overflow-y-scroll scroll-smooth">
        <div className="snap-center">
          <MainSection />
        </div>
        <div className="snap-center">
          <ModelY />
        </div>
        <div className="snap-center">
          <Model3 />
        </div>
        <div className="snap-center">
          <ModelS />
        </div>
        <div className="snap-center">
          <ModelX />
        </div>
        <div className="snap-center">
          <Powerwall />
        </div>
        <div className="snap-center">
          <Carga />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
