import Head from 'next/head';
import React from 'react';
import PaginationStyles from './styles/PaginationStyles';
import Link from 'next/link';
import { usePaginationQuery } from '../../types/generated-queries';
import { perPage } from '../../config';

export const Pagination = ({ page }: { page: number }) => {
  const { data, error, loading } = usePaginationQuery();
  if (loading) return <p>Loading</p>;
  const { count } = data._allProductsMeta;
  const pageCount = Math.ceil(count / perPage);
  return (
    <PaginationStyles>
      <Head>
        <title>
          Lenceria Rossina - Pagina {page} de {pageCount}
        </title>
      </Head>

      <Link href={`/productos/${page - 1}`}>
        <a aria-disabled={page <= 1}> ← Atras</a>
      </Link>
      <p>
        Pagina {page} de {pageCount}
      </p>
      <p>{count} Productos</p>
      <Link href={`/productos/${page + 1}`}>
        <a aria-disabled={page >= pageCount}>Siguiente →</a>
      </Link>
    </PaginationStyles>
  );
};
