import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    Navbar,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";
import './Menu.css';
import { Button } from './Button';

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
    //     return (
    //         <div>
    //             <header>
    //                 <nav className="navbar navbar-expand-md navbar-dark bg-dark">
    //                 <div><a href="https://javaguides.net" className="navbar-brand">Home Chef</a></div>
    //                 </nav>
    //             </header>
    //         </div>
    //     )
    
        
            // return (
                // <>
                // <Nav>
                //     <NavLogo to="/">
                //         Logo
                //     </NavLogo>
                //     <Bars />
        
                //     <NavMenu>
                //         <NavLink to="/">
                //             Home
                //         </NavLink>
                //         <NavLink to="/about">
                //             About
                //         </NavLink>
                //         <NavLink to="/contact">
                //             Contact
                //         </NavLink>
                //         <NavLink to="/signin">
                //             Sign In
                //         </NavLink>
                //         <NavBtn>
                //             <NavBtnLink to="/add-chef/_add">Sign Up</NavBtnLink>                
                //         </NavBtn>
                //     </NavMenu> 
                // </Nav> 
                // </>


        
    
    return (
        <>
            <NavbarView/>
        </>
    );
    }
}

function NavbarView(){
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = ()=>setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton =()=>{
        if(window.innerWidth<=960){
            setButton(false);
        }else{
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
      }, []);
    
    window.addEventListener('resize',showButton);

    return (
    <>
        <nav className="Navbar fixed-top" style={{backgroundColor:'orange'}}>
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    Home Chef <i className="fab fa-typo3"></i>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'> 
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'> 
                        <Link to='/speciality' className='nav-links' onClick={closeMobileMenu}>
                            Speciality
                        </Link>
                    </li>
                    <li className='nav-item'> 
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Chef
                        </Link>
                    </li>
                    <li className='nav-item'> 
                        <Link to='/menus' className='nav-links' onClick={closeMobileMenu}>
                            Menu
                        </Link>
                    </li>
                    <li className='nav-item'> 
                        <Link to='/login' className='nav-links' onClick={closeMobileMenu}>
                            Login
                        </Link>
                    </li>
                    <li className='nav-item'> 
                        <Link to='/add-chef/_add' className='nav-links' onClick={closeMobileMenu}>
                            Chef Register
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    </>
    );
}



export default HeaderComponent