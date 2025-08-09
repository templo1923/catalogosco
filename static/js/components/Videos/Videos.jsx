import React, { useState } from 'react';
import videopc from '../../images/video-pc.mp4';
import videopc2 from '../../images/video2-pc.mp4';
import './Videos.css';
import logo from '../../images/icon.png';

export default function Videos() {
    const [activeVideo, setActiveVideo] = useState(1);

    const handleVideoChange = (videoNumber) => {
        setActiveVideo(videoNumber);
    };

    return (
        <div className='videoContain'>
            <img src={logo} alt="imagen encatalogo" className='imgSec' />
            <h2 className='titleSec'>Echa un vistazo al panel admin</h2>
            <p className='parradoSec'>Descubre cómo nuestro sistema facilita la administración de tu catálogo de productos y la gestión de pedidos con un solo clic.</p>

            <div className="buttonContainer">
                <button
                    className={activeVideo === 1 ? 'activebtn' : ''}
                    onClick={() => handleVideoChange(1)}
                >
                    Catálogo y resto
                </button>
                <button
                    className={activeVideo === 2 ? 'activebtn' : ''}
                    onClick={() => handleVideoChange(2)}
                >
                    Catálogo individual
                </button>
            </div>

            {activeVideo === 1 && (
                <video
                    src={videopc}
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                    className='videoPc'
                />
            )}
            {activeVideo === 2 && (
                <video
                    src={videopc2}
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                    className='videoPc'
                />
            )}
            <hr className='hrSection' />
        </div>
    );
}
