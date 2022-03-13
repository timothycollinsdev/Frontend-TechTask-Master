import React from 'react';
import { ProductCard } from 'components';
import { Category, Product } from 'types';

interface ProductListProps {
  categories: Category[];
  products: Product[];
}

export const ProductList: React.FC<ProductListProps> = React.memo(function ProductList({
  categories,
  products,
}: ProductListProps) {
  return (
    <>
      <div className={'content'}>
        {categories.length && (
          <h1>
            {categories[0].name}
            <small> ({categories[0].articleCount})</small>
          </h1>
        )}
        <div className={'articles'}>
          {products?.map((product: Product, index: number) => (
            <ProductCard key={`${index} + '-' + ${product.name}`} product={product} />
          ))}
        </div>
      </div>
    </>
  );
});
