import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Head from 'next/head';
import { ContactoStyles } from './styles/ContactoStyles';
import { MapContainer } from './MapContainer';

export const Contacto = () => {
  return (
    <ContactoStyles>
      <Head>
        <title>Lenceria Rossina | Contacto</title>
      </Head>
      <MapContainer />
      <div>
        <h2>Contacto</h2>
        <div className='contact-grid'>
          <div>
            <h3>Ubicacion</h3>
            <p>Belgrano 47 Galeria 'La Strada' Local 42.</p>

            <h3>Transportes</h3>
            <p>Linea tren Sarmiento estacion Ramos Mejia</p>
            <p>Colectivos: 96, 172, 242</p>
          </div>
          <div>
            <h3>Instagram</h3>

            <div>
              <a href='https://www.instagram.com/lenceriarossina'>
                <FontAwesomeIcon icon={faInstagram} color='#FF3744' size='3x' />
                lenceriarossina
              </a>
            </div>

            <h3>WhatsApp</h3>
            <div>
              <a href='https://www.instagram.com/lenceriarossina'>
                <FontAwesomeIcon icon={faWhatsapp} color='#FF3744' size='3x' />
                1163040000
              </a>
            </div>
            <div>
              <a href='https://www.instagram.com/lenceriarossina'>
                <FontAwesomeIcon icon={faWhatsapp} color='#FF3744' size='3x' />
                1163040000
              </a>
            </div>
            <div>
              <a href='https://www.instagram.com/lenceriarossina'>
                <FontAwesomeIcon icon={faWhatsapp} color='#FF3744' size='3x' />
                1163040000
              </a>
            </div>
          </div>
        </div>
      </div>
    </ContactoStyles>
  );
};
