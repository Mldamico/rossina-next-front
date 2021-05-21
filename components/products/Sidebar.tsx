import React from 'react';
import Link from 'next/link';
import { SidebarLayout } from '../layout/SidebarLayout';
import { useRouter } from 'next/router';
import { useAllBrandsQuery } from '../../types/generated-queries';

export const Sidebar = () => {
  const router = useRouter();
  const { data, error, loading } = useAllBrandsQuery({
    variables: { ...router.query },
  });
  console.log(data);

  return (
    <SidebarLayout>
      <div className='sidebar-path'>
        <Link href='/'>Home</Link> / PRODUCTOS
      </div>
      <h3>PRODUCTOS</h3>
      <div className='sidebar-link'>
        <Link href='/productos'>VER TODO</Link>
        <Link
          href={{
            pathname: '/productos',
            query: { tipoDePrenda: 'Corseteria' },
          }}
        >
          CORSETERIA
        </Link>
        <Link
          href={{
            pathname: '/productos',
            query: { tipoDePrenda: 'Lenceria' },
          }}
        >
          LENCERIA
        </Link>
        <Link href='/productos'>MATERNAL</Link>
        <Link href='/productos'>HOMBRES</Link>
        <Link href='/productos'>MEDIAS</Link>
      </div>

      {router.query.tipoDePrenda && (
        <>
          <h3>{router.query.tipoDePrenda}</h3>
          <div className='sidebar-link'>
            <Link href={{ pathname: '/productos', query: { ...router.query } }}>
              VER TODO
            </Link>
            {data?.allBrands.map((brand) => (
              <Link
                key={brand.id}
                href={{
                  pathname: '/productos',
                  query: { ...router.query, page: 1, marca: brand.marca },
                }}
              >
                {brand.marca}
              </Link>
            ))}
          </div>
        </>
      )}
    </SidebarLayout>
  );
};
