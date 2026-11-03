import Nav from "./Components/Nav";
import Banner from "./Components/Banner";
import About from "./Components/About";
import Services from "./Components/Services";
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const App = () => {

  useEffect(() => {
    AOS.init({
        easing: 'ease-out-quart',
        delay: 0,
        duration: 750
    })
},[])

  return (
    <div className="bg-slate-900">
      <Nav/>
      <Banner/>
      <About/>
      <Services/>
    </div>
  );
};

export default App;