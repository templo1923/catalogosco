import React from 'react';
import './Footer.css';
import { Link as Anchor } from 'react-router-dom';
import logo from '../../images/icon2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import contactData from '../contact';
import BtnContact from '../BtnContact/BtnContact'
export default function Footer() {
    const contact = contactData[0];

    return (
        <div className='FooterContain'>
            <div className='footerText'>
                <img src={logo} alt="En catálogo web logo" />

                <div className='socials'>
                    <Anchor to={contact.instagram} target="_blank"><i className='fa fa-instagram'></i></Anchor>
                    <Anchor to={`tel:${contact.telefono}`} target="_blank"><i className='fa fa-whatsapp'></i></Anchor>
                    <Anchor to={contact.facebook} target="_blank"><i className='fa fa-facebook'></i></Anchor>
                </div>
            </div>
            <div className='footerText'>
                <h3>Contacto</h3>
                <Anchor to={`mailto:${contact.email}`} target="_blank">{contact.email}</Anchor>
                <Anchor to={`tel:${contact.telefono}`} target="_blank">{contact.telefono}</Anchor>
                <Anchor to={`https://www.google.com/maps?q=${encodeURIComponent(contact.direccion)}`} target="_blank">{contact.direccion}</Anchor>
            </div>
            <div className='footerText'>
                <h3>Nosotros</h3>
                <p>
                    Te invitamos a formar parte de una comunidad en constante innovación y desarrollo de soluciones pensadas por y para negocios.
                </p>

            </div>
            <div className='footerText'>
                <h3>Acceso</h3>
                <BtnContact />
            </div>
        </div>
    );
}
