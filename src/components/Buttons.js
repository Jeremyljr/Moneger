import React from 'react'; 
import './Button.css';
import { Link } from 'react-router-dom'

const STYLES = ['btnPrimary', 'btnSecondary', 'btnOutline'];

export const Button = ({children, type, onClick, buttonStyle}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    //will default to button

    return (
        <Link to='/signup' className='btnMobile'>
            <button className={`btn ${checkButtonStyle}`} onClick={onClick} type={type}>
                {children}
            </button>
        </Link> 
    )
}
