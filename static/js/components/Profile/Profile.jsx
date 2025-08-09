import React from 'react';
import logo from '../../images/icon2.png';
import './Profile.css';
import { Link as Anchor } from 'react-router-dom';
import contactData from '../contact';

export default function Profile() {
    const contact = contactData[0]; // Acceder al primer (y único) elemento del array

    return (
        <div className='profileContain'>
            <img src={logo} alt="" />
            <h2>{contact.nombre}</h2>

            <div className='socials'>
                <Anchor to={contact.instagram} target="_blank"><i className='fa fa-instagram'></i></Anchor>
                <Anchor to={`tel:${contact.telefono}`} target="_blank"><i className='fa fa-whatsapp'></i></Anchor>
                <Anchor to={contact.facebook} target="_blank"><i className='fa fa-facebook'></i></Anchor>
            </div>

            <div className='profileText'>
                <Anchor to={`mailto:${contact.email}`} target="_blank">{contact.email}</Anchor>
                <Anchor to={`https://www.google.com/maps?q=${encodeURIComponent(contact.direccion)}`} target="_blank">{contact.direccion}</Anchor>
            </div>
        </div>
    );
}
