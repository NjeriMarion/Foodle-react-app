import logo from './logo.svg';
import './App.css';
import Navigation from './components/navbar';
import Top from './components/top';
import Menu from './components/menu';
import Footer from './components/footer';
import Last from './components/last';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Top/>
      <Menu/>
      <Last/>
      <Footer/>
    </div>
  );
}

export default App;
