import Header from './Header.js'
import Home from "./Home.js"
import Login from "./Login.js"
import Checkout from "./Checkout.js"
import { auth } from './firebase.js'
import { useStateValue } from './StateProvider.js'
import { useEffect } from 'react'
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from 'react-router-dom';


function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
      if(authUser){
        //the user is logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else{
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  },[])

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
