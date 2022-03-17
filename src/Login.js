import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./css/Login.css"
import { auth } from './firebase';

function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    function emailChange(e){
        setEmail(e.target.value)
    }

    function passChange(e){
        setPassword(e.target.value)
    }

   

    function submitForm(e){
        e.preventDefault();

        auth
        .signInWithEmailAndPassword(email,password)
        .then(auth=>{
            navigate('/')
        })
        .catch(error=>alert(error.message))
    }


    function registerUser(e){
        e.preventDefault();

        auth
        .createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            console.log("Authenticated successfully");
            if(auth){
                navigate('/')
            }
        })
        .catch(error=>alert(error))
    }

  return (
    <div className='login'>
        <Link to ='/'>
            <img className='login__logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/603px-Amazon_logo.svg.png?20220213013322" />
        </Link>

        <div className='login__container'>
            <h1>Sign In</h1>
            <form>
                <h5>E-mail</h5>
                <input onChange={emailChange} className='login__email' type='text' value={email}/>

                <h5>Password</h5>
                <input onChange={passChange} className='login__password' type='password' value={password}/>

                <button onClick={submitForm} className='login__signinButton'>Sign In</button>
            </form>
            <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
            <button onClick={registerUser}
            className='login__registerButton'>Don't have an account?</button>
        </div>
    </div>
  )
}

export default Login