import React from 'react'
import { Link } from 'react-router-dom'
import "./css/Login.css"

function Login() {
  return (
    <div className='login'>
        <Link to ='/'>
            <img className='login__logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/603px-Amazon_logo.svg.png?20220213013322" />
        </Link>

        <div className='login__container'>
            <h1>Sign In</h1>
            <form>
                <h5></h5>
            </form>
        </div>
    </div>
  )
}

export default Login