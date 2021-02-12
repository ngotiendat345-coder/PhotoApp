import React from 'react'
import {NavLink} from 'react-router-dom'
import { Container } from 'reactstrap';
import './Header.scss';

function Header(){
    return(
        <header className="header">
            <Container className="header__container">
                <a className="header__link header__title" href="https://youtube.com/easyfrontend" target="_blank" rel="noopener noreferrer">Easy Frontend</a>
                <NavLink to="/photos" className="header__link header__link--active header__photo">Photos</NavLink>
            </Container>
        </header>

    )
}

export default Header;