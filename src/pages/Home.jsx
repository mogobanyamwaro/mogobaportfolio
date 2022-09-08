import { useState } from "react";
import Contact from "../components/contact/Contact";
import Intro from "../components/intro/Intro";
import Navbar from "../components/navbar/Navbar";
import Portifolio from "../components/portifolio/Portifolio";
import Testimonials from "../components/testimonials/Testimonials";
import Work from "../components/works/Work";
import Menu from "../components/menu/Menu";
import Skills from "../components/skills/Skills";
import Footer from "../components/footer/Footer";

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <section className="sections">
        <Intro />
        <Portifolio />
        <Skills />
        <Work />

        <Contact />
        <Footer />
      </section>
    </div>
  );
}

export default Home;
