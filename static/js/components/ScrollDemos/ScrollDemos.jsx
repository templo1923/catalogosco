import React, { useState } from 'react';
import './ScrollDemos.css';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Link as Anchor } from "react-router-dom";
import logo from '../../images/icon.png';
import img1 from '../../images/demos/1.jpg';
import img2 from '../../images/demos/2.jpg';
import img3 from '../../images/demos/3.jpg';
import img4 from '../../images/demos/4.jpg';
import img5 from '../../images/demos/5.jpg';
import img6 from '../../images/demos/6.jpg';
import img7 from '../../images/demos/7.jpg';
import img8 from '../../images/demos/8.jpg';

import img9 from '../../images/demos/1-b.jpg';
import img10 from '../../images/demos/2-b.jpg';
import img11 from '../../images/demos/3-b.jpg';
import img12 from '../../images/demos/4-b.jpg';
import img13 from '../../images/demos/5-b.jpg';
import img14 from '../../images/demos/6-b.jpg';
import img15 from '../../images/demos/7-b.jpg';
import img16 from '../../images/demos/8-b.jpg';

export default function ScrollDemos() {
    SwiperCore.use([Navigation, Pagination, Autoplay]);

    const [activeImages, setActiveImages] = useState('images'); // Estado para controlar qué imágenes mostrar

    const alt = 'En catálogo';
    // Array de objetos con imágenes
    const images = [
        { idProducto: 1, src: img1, alt: alt },
        { idProducto: 2, src: img2, alt: alt },
        { idProducto: 3, src: img3, alt: alt },
        { idProducto: 4, src: img4, alt: alt },
        { idProducto: 5, src: img5, alt: alt },
        { idProducto: 6, src: img6, alt: alt },
        { idProducto: 7, src: img7, alt: alt },
        { idProducto: 8, src: img8, alt: alt },
    ];

    const images2 = [
        { idProducto: 1, src: img9, alt: alt },
        { idProducto: 2, src: img10, alt: alt },
        { idProducto: 3, src: img11, alt: alt },
        { idProducto: 4, src: img12, alt: alt },
        { idProducto: 5, src: img13, alt: alt },
        { idProducto: 6, src: img14, alt: alt },
        { idProducto: 7, src: img15, alt: alt },
        { idProducto: 8, src: img16, alt: alt },
    ];

    const handleButtonClick = (imagesType) => {
        setActiveImages(imagesType);
    };

    return (
        <div className='ScrollDemos'>
            <div className='ScrollDemosText'>
                <img src={logo} alt="imagen encatalogo" className='imgSec' />
                <h2 className='titleSec'>Diseño responsivo adaptable</h2>
                <p className='parradoSec'>Descubre cómo nuestro sistema facilita la administración de tu catálogo de productos y la gestión de pedidos con un solo clic.</p>
                <div className="buttonContainer">
                    <button
                        className={activeImages === 'images' ? 'activebtn' : ''}
                        onClick={() => handleButtonClick('images')}
                    >
                        Catálogo y resto
                    </button>
                    <button
                        className={activeImages === 'images2' ? 'activebtn' : ''}
                        onClick={() => handleButtonClick('images2')}
                    >
                        Catálogo individual
                    </button>
                </div>
            </div>

            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                slidesPerView={'auto'}
                id='swiper_container_images'
                autoplay={{ delay: 1000 }}
                loop={true}
            >
                {(activeImages === 'images' ? images : images2).map(item => (
                    <SwiperSlide key={item.idProducto} id='SwiperSlide-scroll-image'>
                        <Anchor to={`/`}>
                            <img src={item.src} alt={item.alt} />
                        </Anchor>
                    </SwiperSlide>
                ))}
            </Swiper>
            <hr className='hrSection' />
        </div>
    );
}
