import React from 'react';
import { Navegation } from './Navegation';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCartPlus,
  faSearch,
  faMapMarkerAlt,
  faSignInAlt,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
import { HeaderStyles } from './styles/HeaderStyles';
import { Search } from '../layout/Search';
import { useUser } from '../../lib/useUser';
import { SignOut } from '../auth/SignOut';

export const Header = () => {
  const user = useUser();
  return (
    <>
      <HeaderStyles>
        <div className='header-section'>
          <div className='header-section-left'>
            <div className='header-section-item'>
              <FontAwesomeIcon icon={faSearch} size='2x' />
              <button type='button'>Buscar</button>
            </div>
            <div className='header-section-item'>
              <FontAwesomeIcon icon={faMapMarkerAlt} size='2x' />
              <Link href='/contact'>Contacto</Link>
            </div>
          </div>
          <div className='title'>
            <h1>Lenceria Rossina</h1>
          </div>
          <div className='header-section-right'>
            {!user ? (
              <div className='header-section-item'>
                <FontAwesomeIcon icon={faSignInAlt} size='2x' />
                <Link href='/auth/registrarse'>Registrarse | Entrar</Link>
              </div>
            ) : (
              <div className='header-section-item'>
                <FontAwesomeIcon icon={faSignOutAlt} size='2x' />
                <SignOut />
              </div>
            )}

            <div className='header-section-item'>
              <FontAwesomeIcon icon={faCartPlus} size='2x' />
              <button type='button'>Cart</button>
            </div>
          </div>
        </div>
        <Navegation />
      </HeaderStyles>
      <Search />
    </>
  );
};
