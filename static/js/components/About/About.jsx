import React from 'react'
import img from '../../images/about.png'
import './About.css'
import logo from '../../images/icon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import BtnContact from '../BtnContact/BtnContact'
export default function About() {
    return (
        <div className='aboutContain'>
            <div className='aboutText'>
                <img src={logo} alt="imagen encatalogo" className='imgSec' />
                <h2 className='titleSec'>Un sistema que cubre todas tus necesidades</h2>
                <p>
                    Nuestro sistema está diseñado para transformar la forma en que gestionas tu restaurante o catálogo de productos.
                    Con una interfaz intuitiva y herramientas poderosas, podrás manejar tus productos, usuarios y pedidos de manera eficiente y sin complicaciones.
                </p>

                <span>¡Únete a nosotros en este viaje hacia la eficiencia y el éxito!</span>

                <BtnContact />
            </div>
            <hr className='hrSection' />
            <div className='deFlexImgCards'>
                <div className='imgAbout'>
                    <img src={img} alt="efecto vial web" />
                </div>
                <div className='cardsText'>
                    <div className='cardText'>
                        <FontAwesomeIcon icon={faCheck} className='check' />
                        <p>
                            Pedidos por WhatsApp.
                        </p>
                    </div>
                    <div className='cardText'>
                        <FontAwesomeIcon icon={faCheck} className='check' />
                        <p>
                            Organiza tus productos en categorías.
                        </p>
                    </div>

                    <div className='cardText'>
                        <FontAwesomeIcon icon={faCheck} className='check' />
                        <p>
                            Agrega, edita o elimina artículos fácilmente.
                        </p>
                    </div>
                    <div className='cardText'>
                        <FontAwesomeIcon icon={faCheck} className='check' />
                        <p>
                            Muestra banners promocionales en la página principal.
                        </p>
                    </div>
                    <div className='cardText'>
                        <FontAwesomeIcon icon={faCheck} className='check' />
                        <p>
                            Administra usuarios y asigna roles.
                        </p>
                    </div>

                    <div className='cardText'>
                        <FontAwesomeIcon icon={faCheck} className='check' />
                        <p>
                            Utiliza códigos de descuento para ofrecer beneficios.
                        </p>
                    </div>



                    <div className='cardText'>
                        <FontAwesomeIcon icon={faCheck} className='check' />
                        <p>
                            Añade detalles de contacto para mejorar la comunicación.
                        </p>
                    </div>

                </div>
            </div>
            <hr className='hrSection' />
        </div>
    )
}
