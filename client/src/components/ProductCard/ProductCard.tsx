import React from 'react';
import { Product } from 'types';
import { formatter } from 'utils';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = React.memo(function ProductCard({
  product,
}: ProductCardProps) {
  const productFormat = formatter.format(product?.prices?.regular?.value / 100);
  return (
    <div className={'article'}>
      <img src={product.images[0].path} alt="product" />
      <div>{product.name}</div>
      <div>{productFormat}</div>
      <section role="button">Add to cart</section>
    </div>
  );
});
