import React from 'react';
import { resetIdCounter, useCombobox } from 'downshift';
import { DropDown, DropDownItem, SearchStyles } from './styles/Dropdown';
import { Product as productType } from '../../types/generated-queries';
import debounce from 'lodash.debounce';
import { useRouter } from 'next/router';
import { useSearchProductsLazyQuery } from '../../types/generated-queries';

export const Search = () => {
  const router = useRouter();
  const [findItems, { data, error, loading }] = useSearchProductsLazyQuery({
    fetchPolicy: 'no-cache',
  });

  const findItemsButChill = debounce(findItems, 350);

  resetIdCounter();
  const items = data?.searchTerms || [];
  const {
    isOpen,
    inputValue,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    getItemProps,
    highlightedIndex,
  } = useCombobox({
    items,
    onInputValueChange() {
      findItemsButChill({
        variables: {
          searchTerm: inputValue,
        },
      });
    },
    onSelectedItemChange({ selectedItem }) {
      void router.push({
        pathname: `/producto/${selectedItem.slug}`,
      });
    },
    itemToString(item) {
      return item?.nombre || '';
    },
  });

  return (
    <SearchStyles>
      <div {...getComboboxProps()}>
        <input
          {...getInputProps({
            type: 'search',
            placeholder: 'Buscar prenda',
            id: 'search',
            className: loading ? 'loading' : '',
          })}
        />
      </div>
      <DropDown {...getMenuProps()}>
        {isOpen &&
          items.map((item, index) => (
            <DropDownItem
              key={item.id}
              {...getItemProps({ item, index })}
              highlighted={index === highlightedIndex}
            >
              <img
                src={item.imagen[0].image.publicUrlTransformed}
                alt={item.nombre}
                width='50'
              />
              {item.nombre}
            </DropDownItem>
          ))}
        {isOpen && !items.length && !loading && (
          <DropDownItem>
            Lo siento, no se encontro nada con el siguiente valor: ${inputValue}
          </DropDownItem>
        )}
      </DropDown>
    </SearchStyles>
  );
};
