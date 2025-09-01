import React, { useEffect, useState, useRef } from 'react';
import Modal from 'react-modal';
import { Link as Anchor } from 'react-router-dom';
import logo from '../../images/logo.png';
import logo2 from '../../images/icon2.png';
import 'swiper/swiper-bundle.css';
import Profile from '../Profile/Profile'
import './Navbar.css'
import fondo from '../../images/fondo.png'
import { useMediaQuery } from '@react-hook/media-query';
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const isScreenLarge = useMediaQuery('(min-width: 900px)');

    return (
        <header>
            <nav>
                <Anchor to={`/`} className='logo'>

                    {isScreenLarge ? (
                        <img src={logo} alt="En catálogo web logo" />
                    ) : (
                        <img src={logo2} alt="En catálogo web logo" />
                    )}
                </Anchor>

                <div className='deFLexNavs'>


                    <div className={`nav_toggle  ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>


                <Modal
                    isOpen={isOpen}
                    onRequestClose={() => setIsOpen(false)}
                    className="modalNav"
                    overlayClassName="overlay"
                >
                    <div className="modalNav-content">

                        <div className='fondo'>
                            <img src={fondo} alt="" />

                        </div>
                        <Profile />


                    </div>
                </Modal>

            </nav>
        </header>
    );
}
