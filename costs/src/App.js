import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProject'

import Container from './components/layouts/Container'


function App() {
  return (
    <Router>
      <div>
        <ul>
          <Link to="/" >Home</Link>
          <Link to="/contact" >Contato</Link>
          <Link to="company" >Empresa</Link>
          <Link to="newproject" >Novo Projeto</Link>
        </ul>
      </div>

      <Container customClass = "min-heigth">
        <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/company" element={< Company />} />
          <Route path="/contact" element={< Contact />} />
          <Route path="newproject" element={< NewProject />} />
        </Routes>
      </Container>

      <footer>Rodapé</footer>
    </Router>
  );
}

export default App;
