import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import HeroSection from './Components/HeroSection/HeroSection';
import Home from './Pages/Home/Home';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
    <Header/>
    <HeroSection/>
    <Home/>
    <Footer/>
    </div>
  );
}

export default App;
