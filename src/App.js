import logo from './logo.svg';
import './App.css';
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import DesignDocs from "./components/DesignDocs.js";
import Navbar from "./components/Navbar.js";
import Projects from "./components/Projects.js";

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <DesignDocs />
      <Contact />
    </main>
  );
}

export default App;
