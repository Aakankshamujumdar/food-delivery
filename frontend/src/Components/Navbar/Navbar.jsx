import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'
import { StoreContext } from '../Context/StoreContext'
import './Navbar.css'

const Navbar = ({setShowLogin}) => {
    const [menu, setMenu] = useState("home")

    const {getTotalCartAmount} = useContext(StoreContext);
  return (
    <div className="navbar">
       <a href="/"> <img src={assets.logo} alt="" className="logo" /></a>
        <ul className="navbar-menu">
        <a href="/" onClick={()=>setMenu("home")} className={menu==="home"? "active":""}>home</a>
        <a href="#explore-menu" onClick={()=>setMenu("menu")} className={menu==="menu"? "active":""}>menu</a>
        <a href="#app-download" onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile-app</a>
        <a href="#footer" onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>contact-us</a>
        </ul>
    <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
           <Link to="/cart"><img src={assets.basket_icon} alt="" /></Link> 
           <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>sign in</button>

    </div>
      
    </div>
  )
}

export default Navbar
