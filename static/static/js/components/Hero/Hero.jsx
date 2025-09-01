import React from 'react'
import './Hero.css'
import Img from '../../images/mokup.png'
import { Link as Anchor } from "react-router-dom";
import BtnContact from '../BtnContact/BtnContact'
import BtnMore from '../BtnMore/BtnMore';
export default function Hero() {
    return (
        <div className='heroContain'>
            <div className='heroText'>

                <h1>Tu catálogo de productos fácil y rápido</h1>
                <hr className='hr' />
                <h4>Te invitamos a formar parte de una comunidad en constante innovación y desarrollo de soluciones pensadas por y para negocios.</h4>
                <span>¡Únete a nosotros en este viaje!</span>
                <div className='deFlexBtns'>
                    <BtnContact /> <BtnMore />
                </div>

            </div>
            <div className='img'>
                <img src={Img} alt="Efecto Vial" />
            </div>
        </div>
    )
}
