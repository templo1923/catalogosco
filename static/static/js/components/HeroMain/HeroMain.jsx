import React from 'react';
import './HeroMain.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faBoxOpen, faCogs } from '@fortawesome/free-solid-svg-icons';

export default function HeroMain() {
    return (
        <div className='heroMain'>
            <div className='cardMain'>
                <FontAwesomeIcon icon={faMobileAlt} className='iconMian' />
                <h3>Pedidos por WhatsApp</h3>
                <p>Realiza tus pedidos de manera rápida y sencilla a través de WhatsApp sin complicaciones.</p>
            </div>

            <div className='cardMain'>
                <FontAwesomeIcon icon={faBoxOpen} className='iconMian' />
                <h3>Tu catálogo de productos</h3>
                <p>Explora y gestiona tu catálogo de productos de manera eficiente, con categorías organizadas para una mejor experiencia de usuario.</p>
            </div>

            <div className='cardMain'>
                <FontAwesomeIcon icon={faCogs} className='iconMian' />
                <h3>Proceso Sencillo</h3>
                <p>Desde la selección del producto hasta la realización del pedido, disfruta de un proceso optimizado y fácil de administrar.</p>
            </div>
        </div>
    );
}
