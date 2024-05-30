import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import HeroSection from './Components/HeroSection/HeroSection';
import Home from './Pages/Home/Home';
import Footer from './Components/Footer/Footer';
import { Route, Routes } from 'react-router';
import ContactUs from './Pages/Contact/ContactUs';


function App() {
  return (
    <div className="App">
    <Header/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<ContactUs/>}/>
      </Routes>
    <Footer/>
    </div>
  );
}

export default App;
