import React, { useState, useCallback } from 'react';
import { ProductList, Header, Footer, SideBar, Spinner } from 'components';
import { FOOTER_TEXT, HEADER_TEXT } from 'constants/index';
import { useProductCategories } from 'hooks';

import './Products.css';

export const Products: React.FC = React.memo(function () {
  const [searchValue, setSearchValue] = useState<string>('');
  const { loading, filteredProducts, categories } = useProductCategories(searchValue);

  const onChangeHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      event.preventDefault();
      setSearchValue(event.target.value);
    },
    [setSearchValue]
  );

  return (
    <div className={'page'}>
      <Header title={HEADER_TEXT} onChangeHandler={onChangeHandler} searchValue={searchValue} />
      {categories.length ? (
        <>
          <SideBar categories={categories} />
          <ProductList categories={categories} products={filteredProducts} />
        </>
      ) : (
        <div className={'center'}>
          <Spinner visible={loading} />
        </div>
      )}
      <Footer text={FOOTER_TEXT} />
    </div>
  );
});
