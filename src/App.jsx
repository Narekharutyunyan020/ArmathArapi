import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import OurProjects from './pages/OurProjects/OurProjects';
import Structure from './pages/Structure/Structure';
import SupportArmath from './pages/SupportArmath/SupportArmath';
import JoinStudent from './pages/JoinUsStudent/JoinStudent';
import Events from './pages/Events/Events';
import FieldsOfStudy from './pages/FieldsOfStudy/Fileds';



function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<OurProjects />} />
        <Route path="/structure" element={<Structure />} />
        <Route path="/support" element={<SupportArmath />} />
        <Route path="/fields" element={<FieldsOfStudy />} />
        <Route path="/join" element={<JoinStudent />} />
        <Route path="/events" element={<Events />} />


      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;