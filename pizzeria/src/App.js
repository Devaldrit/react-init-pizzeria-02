import './App.css';
import Header from './components/Header/Header.js';
import Container from './components/Container/container.js';
import Popup from './components/Popup/Popup';
import Footer from './components/Footer/Footer.js';
function App() {
  return (
    <div className="App">
        <Header/>
        <Container/>
        <Popup/>
        <Footer/>
    </div>
  ); 
}

export default App;
