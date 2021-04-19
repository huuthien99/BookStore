import React from 'react';
import { Link } from 'react-router-dom'
import { ShoppingCartOutlined, UserOutlined, FacebookOutlined, InstagramOutlined } from '@ant-design/icons'
import './header.css'


function Header() {
  return (
    <>
      <div className='header-container '>
        <div className='header-icons'>
          <FacebookOutlined className='header-container-icon' />
          <InstagramOutlined className='header-container-icon' />
        </div>
        <div className='heading ' >

          <div className="header-logo">
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
                <Link className='link' to='./login'> Login</Link>
                <Link className='link' to='./profile'>Profile</Link>
                <Link className='link' onClick={localStorage.removeItem}>Log Out</Link>
              </div>
            </div>
            <Link className='header-user-link' to='/cart'>
              <ShoppingCartOutlined />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;