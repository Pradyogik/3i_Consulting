import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import HeroSection from './Components/HeroSection/HeroSection';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
    <Header/>
    <HeroSection/>
    <Home/>
    </div>
  );
}

export default App;
