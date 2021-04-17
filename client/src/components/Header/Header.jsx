import React from 'react';
import { Link } from 'react-router-dom'
import { ShoppingCartOutlined, UserOutlined } from '@ant-design/icons'
import './header.css'
// import logo from '../../img/logo.png'
function Header() {
  return (
    <div className='heading ' >
      <div className="header-logo">
        {/* <img src={logo} alt="book store" width='110px' height='auto' /> */}
        <h3>Book Store</h3>
      </div>
      <div className="header-nav">
        <Link className='header-nav-link' to='/'  > Home</Link>
        <Link className='header-nav-link' to='/product'>Product</Link>
        <Link className='header-nav-link' to='/about'>About Us</Link>
      </div>

      <div className="header-user">
        <div className='header-user-icon'>
          <UserOutlined />
          <div className='header-user-acc'>
            <Link className='link' to=''> Login</Link>
            <Link className='link' to=''>Profile</Link>
            <Link className='link' onClick={localStorage.removeItem}>Log Out</Link>
          </div>
        </div>
        <Link className='header-user-link' to='/cart'>
          <ShoppingCartOutlined />
        </Link>

      </div>
    </div>
  );
}

export default Header;