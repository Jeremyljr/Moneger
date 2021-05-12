import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../components/Buttons';
import './Navbars.css';
import logo from '../../images/sparrow.png';

function Navbar() {

    //Burger view. when click, toggle between classes
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    
    const handleClick = () => setClick(!click);
    //when click on a nav item, close mobile menu
    const closeMobileMenu = () => setClick(false);

    //function that display button depending on screen size
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbarContainer">
                    {/* <Link to="/" className="navbarLogo">

                    </Link> */}
                    {/* <img src="../../../public/images/Sparrow (Logo,Trans).png" alt="logo" 
                        className="img"
                        /> */}
                    <div className="title" onClick={closeMobileMenu}>
                        <img className="sparrow" src={logo} alt="Logo" />
                        {/* <img src={'.././images/Sparrow_1.png'} alt='logo' /> */}
                        <h3>Moneger</h3>
                    </div>
                    <div className="menuIcon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'navMenu active' : 'navMenu'}>
                        <li className='navItem'>
                            <Link to='/' className='navLinks' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='navItem'>
                            <Link to='/login' className='navLinks' onClick={closeMobileMenu}>
                                Login
                            </Link>
                        </li>
                        <li className='navItem'>
                            <Link to='/signup' className='navLinks' onClick={closeMobileMenu}>
                                Sign Up
                            </Link>
                        </li>
                        {/* {button && <Button buttonStyle='btnOutline'>TRY</Button>} */}
                    </ul>
                    {/* && means if x is true  */}

                </div>
            </nav>
        </>
    )
}

export default Navbar
