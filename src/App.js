import Header from './Header.js'
import Home from "./Home.js"
import Login from "./Login.js"
import Checkout from "./Checkout.js"

import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
      
        
         <Routes>

         
          
          <Route exact path="/" element ={<><Header /> <Home /> </>} />

          <Route exact path="/checkout" element={<><Header /> <Checkout /></>} />

          <Route exact path="/login" element ={<><Login /></>} />
          
          </Routes>
        
      </div>
    </Router>
  );
}

export default App;
