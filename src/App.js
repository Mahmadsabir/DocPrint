import Navbar from './components/Navbar';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import RepairPage from './pages/RepairPage';
import ShopPage from './pages/ShopPage';
import ContactPage from './pages/ContactPage';
import LeftSlide from './components/slider/LeftSlide';

function App() {
  return (
    <div className="App">
      <Navbar/>

      <div className="container">
        {/* this routes component will raps over every individual component
         it will tell here is the list of routs chiise the one that fits best */}
        <Routes> 
          {/* erver routte has a path "/" index page and element */}
          <Route path="/LeftSlide" element={<LeftSlide/>} />
          <Route path="/" element={<HomePage/>} />
          <Route path="/Home" element={<HomePage/>} />
          <Route path="/About" element={<AboutPage/>} />
          <Route path="/Contact" element={<ContactPage/>} />
          <Route path="/Shop" element={<ShopPage/>} />
          <Route path="/Repair" element={<RepairPage/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
