import Head from 'next/head';
import React from 'react';
import PaginationStyles from './styles/PaginationStyles';
import Link from 'next/link';
import { usePaginationQuery } from '../../types/generated-queries';
import { perPage } from '../../config';
import { useRouter } from 'next/router';

type filtros = { tipoDePrenda?: string; marca?: string };

export const Pagination = ({ page }: { page: number }) => {
  const router = useRouter();
  const filtro = router.query;
  console.log(filtro);
  const { data, error, loading } = usePaginationQuery({
    variables: { ...router.query },
  });
  if (loading) return <p>Loading</p>;
  const { count } = data._allProductsMeta;
  console.log(router.query);

  const pageCount = Math.ceil(count / perPage);
  console.log(router);
  return (
    <PaginationStyles>
      <Head>
        <title>
          Lenceria Rossina - Pagina {page} de {pageCount}
        </title>
      </Head>

      <Link
        href={{
          pathname: `/productos/${page - 1}`,
          query: { ...router.query },
        }}
      >
        <a aria-disabled={page <= 1}> ← Atras</a>
      </Link>
      <p>
        Pagina {page} de {pageCount}
      </p>
      <p>{count} Productos</p>
      <Link
        href={{
          pathname: `/productos/${page + 1}`,
          query: { ...router.query },
        }}
      >
        <a aria-disabled={page >= pageCount}>Siguiente →</a>
      </Link>
    </PaginationStyles>
  );
};
