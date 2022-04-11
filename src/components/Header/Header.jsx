import React from "react";
import { NavLink } from "react-router-dom";
import styles from './Header.module.css';
import HeaderImg from "./../../../src/assets/images/coffee.png" 

const Header = (props) => {
  return (
    <header className={styles.header}>
    <img src={HeaderImg}></img> 
    <div className={styles.loginBlock}>
      {props.isAuth ? props.login :
      <NavLink to='/login'>Login</NavLink> }
    </div>
  </header>
  )}
///https://img.icons8.com/dusk/344/kawaii-coffee.png
  export default Header;

  