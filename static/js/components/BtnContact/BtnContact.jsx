import React from 'react'
import { Link as Anchor } from 'react-router-dom';
import './BtnContact.css'
import contact from '../contact';

export default function BtnContact() {
    const handleWhatsappMessage = () => {
        const phone = contact[0].telefono;
        const message = "Hola, estoy interesado en el sistema de catálogo de prodcutos.";
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;

        window.open(whatsappUrl, '_blank');
    };

    return (
        <buton className='BtnContact' onClick={handleWhatsappMessage}>
            Contactar
        </buton>
    )
}
