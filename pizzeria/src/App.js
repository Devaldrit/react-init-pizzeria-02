import './App.css';
import {Header} from './components/Header/Header.js';
import {Popup} from './components/Popup/Popup';
import { Main } from './components/Main/Main.js';
import {Footer} from './components/Footer/Footer.js';
import { useState } from 'react';
function App() {

  const [pizza, setPizza] = useState(null)
  return (
    <div className="App">
        <Header/>
        <Main pizza={pizza} onGetPizza={setPizza}/>
        {/* <Popup/> */}
        <Footer/>
    </div>
  ); 
}

export default App;
