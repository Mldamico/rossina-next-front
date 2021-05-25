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
import { useCart } from '../../lib/useCart';
import { Cart } from '../cart/Cart';

export const Header = () => {
  const user = useUser();
  const { openCart } = useCart();
  return (
    <>
      <HeaderStyles>
        <div className='header-section'>
          <div className='header-section-left'>
            <div className='header-section-item'>
              <FontAwesomeIcon icon={faSearch} size='2x' />
              <button type='button'>Buscar</button>
            </div>
            <div>
              <Link href='/contacto'>
                <a className='header-section-item'>
                  <FontAwesomeIcon icon={faMapMarkerAlt} size='2x' />
                  Contacto
                </a>
              </Link>
            </div>
          </div>
          <div className='title'>
            <h1>
              <Link href='/'>Lenceria Rossina</Link>
            </h1>
          </div>
          <div className='header-section-right'>
            {!user ? (
              <>
                <Link href='/auth/registrarse'>
                  <a className='header-section-item'>
                    <FontAwesomeIcon icon={faSignInAlt} size='2x' />
                    Registrarse | Entrar
                  </a>
                </Link>
              </>
            ) : (
              <div className='header-section-item'>
                <FontAwesomeIcon icon={faSignOutAlt} size='2x' />
                <SignOut />
              </div>
            )}
            {user && (
              <div className='header-section-item' onClick={openCart}>
                <FontAwesomeIcon icon={faCartPlus} size='2x' />
                <button type='button'>Carrito</button>
              </div>
            )}
          </div>
        </div>
        <Navegation />
      </HeaderStyles>
      <Search />
      <Cart />
    </>
  );
};
