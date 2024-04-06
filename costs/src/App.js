import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import Projects from './components/pages/Projects'
import NewProject from './components/pages/NewProject'
import NavBar from './components/layouts/NavBar'
import Footer from './components/layouts/Footer'

import Container from './components/layouts/Container'


function App() {
  return (
    <Router>
      <NavBar />
      <Container customClass = "min-heigth">
        <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/projects" element={< Projects />} />
          <Route path="/company" element={< Company />} />
          <Route path="/contact" element={< Contact />} />
          <Route path="newproject" element={< NewProject />} />
        </Routes>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
