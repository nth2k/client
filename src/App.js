import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Hobbies from './pages/Hobbies'
import Contact from './pages/Contact'
import './stylesheets/home.css'
import './stylesheets/header-footer.css'
import './stylesheets/courosel.css'
import './stylesheets/projects.css'
import './stylesheets/hobbies.css'
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init({
  duration: 500
});

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = '/' element={<Home />}/>
          <Route path = '/projects' element={<Projects />}/>
          <Route path = '/hobbies' element={<Hobbies />}/>
          <Route path = '/contact' element={<Contact />}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
