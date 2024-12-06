import './App.css';
import Header from './components/Header/Header.js';
import Popup from './components/Popup/Popup';
import { Main } from './components/Main/Main.js';
import Footer from './components/Footer/Footer.js';
function App() {
  return (
    <div className="App">
        <Header/>
        <Main/>
        <Popup/>
        <Footer/>
    </div>
  ); 
}

export default App;
