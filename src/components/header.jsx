import { ReactComponent as Logo } from '../Roseeta.svg';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import {Link} from 'react-router-dom';


function Header() {
  let [menu, setMenu] = useState(false);

  return(
    <>
    <header>
      <Link className="title" to="/">
        <Logo className="title__logo"/>
        <div className="title__name">Roseeta</div>
      </Link>
      <div className="info">
        <Link to="/about" className="info__nav">About</Link>
        <Link to="/team" className="info__nav">Team</Link>
        <Link to="/contact" className="info__nav">Contact</Link>
        <button onClick={ ()=>{ setMenu(!menu) } } className="info__menu">
          <Icon icon="ant-design:menu-outlined" color="#ffffff" width="30" height="30"/>
        </button>    
      </div>
    </header>
    {
      menu == true ? <Menu/> : null
    }
  </>
  );
}

export default Header;


function Menu() {
  return(
    <div className="menu__modal">
      <Link to="/about">About</Link>
      <Link to="/team">Team</Link>
      <Link to="/contact">Contact</Link>
    </div>
  )
}