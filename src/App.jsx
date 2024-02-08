import "./app.scss";
import { Contact } from "./components/Contact/Contact";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Parallax } from "./components/Parallax/Parallax";
import { Projects } from "./components/Projects/Projects";
import { Skills} from "./components/Skills/Skills";



const App = () => {
  return (
  
  <div>
    <section id="Homepage">
      <Navbar />
      <Hero />
     
    </section>

    <section id="Services"><Parallax type="services" />
    
    </section>
    <section id= "Skills"><Skills/></section>
    <section id="Portfolio"><Parallax type="portfolio" /></section>
    <Projects />
    <section id="Contact"><Contact /></section>
  </div>
  );
};

export default App;
