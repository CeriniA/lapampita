import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
    return (
        <a
            href="http://wa.me/5493544564393"
            className="whatsapp-float"
            target="_blank"
            rel="noopener noreferrer"
        >
            <FaWhatsapp size={40} />
        </a>
    );
};

export default WhatsAppButton;
