import React, { useState } from 'react';
import './BtnMore.css';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link as Anchor } from "react-router-dom";

Modal.setAppElement('#root'); // Necesario para accesibilidad

export default function BtnMore() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const demos = [
        {
            link: `https://indumentaria.encatalogo.com`,
            img: `https://indumentaria.encatalogo.com/logo.png`,
            titulo: 'Indumentaria',
        },
        {
            link: `https://tecnologia.encatalogo.com`,
            img: `https://tecnologia.encatalogo.com/logo.png`,
            titulo: 'Tecnología',
        },
        {
            link: `https://restaurante.encatalogo.com`,
            img: `https://restaurante.encatalogo.com/logo.png`,
            titulo: 'Restaurante',
        },
    ];

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div>
            <button onClick={openModal} className="BtnContact">
                Ver Demos
            </button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Demos Modal"
                className="modal"
                overlayClassName="modal-overlay"
            >
                <div className="demos-container">
                    {demos.map((demo, index) => (
                        <div key={index} className="demo-item">
                            <Anchor to={demo.link} target="_blank" rel="noopener noreferrer">
                                <div className='deFlexAnc'>
                                    <img src={demo.img} alt={demo.titulo} />
                                    {demo.titulo}
                                </div>
                                <FontAwesomeIcon icon={faChevronRight} className="chevron-icon" />
                            </Anchor>
                        </div>
                    ))}
                </div>
            </Modal>
        </div>
    );
}
