
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/navbar/Navbar";
import Skills from "./components/skills/Skills";
import Works from "./components/works/Works";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/Footer";
import Intro from "./components/intro/intro";
import { Helmet } from "react-helmet";
import HomeScreen from "./components/homeScreen/HomeScreen";

function App() {
  const [entered, setEntered] = useState(false);

  return (
    <>
      <Helmet>
        <title>Vritika | Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Vritika Jangir, freelance React developer."
        />
        <meta
          name="keywords"
          content="React, developer, portfolio, freelance, freelancer, react native, mobile app, development JavaScript"
        />
        <meta name="author" content="Vritika Jangir" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      <AnimatePresence>
        {!entered && <HomeScreen key="home" onEnter={() => setEntered(true)} />}
      </AnimatePresence>

      {entered && (
        <div className="app">
          <Navbar />
          <Intro />
          <Skills />
          <Works />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
