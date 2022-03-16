import React from 'react'
import './css/Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';




function Header() {

    const [state, dispatch] = useStateValue();

  return (
    <div className='header'>
        <Link to="/">
            <img className='header__logo' src ="https://pngimg.com/uploads/amazon/amazon_PNG25.png" alt="header Image"/>
        </Link>
        
        <div className='header__search'>
            <input type='text' className='header__searchInput' />
            <SearchIcon className='header__searchIcon' />
        </div>
        
        <div className='header__nav'>
            <Link to = './login'>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Hello</span>
                    <span className='header__optionLineTwo'>Sign in</span>
                </div>
            </Link>

            <div className='header__option'>
            <span className='header__optionLineOne'>Returns</span>
                <span className='header__optionLineTwo'>& Orders</span>
            </div>

            <div className='header__option'>
            <span className='header__optionLineOne'>Your</span>
                <span className='header__optionLineTwo'>Prime</span>
            </div>

            <div className='cart'>
                <Link to = "/checkout">
                    <ShoppingCartIcon className='cart__icon' />
                    <span className='header__basketCount'>{state.basket?.length}</span>
                </Link>
            </div>

        </div>
    
    </div>
  )
}

export default Header