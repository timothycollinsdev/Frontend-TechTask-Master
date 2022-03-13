import { useEffect, useState } from 'react';
import { Category, Product, Categories, ProductCategoryHook } from 'types';
import { useQuery } from '@apollo/client';
import { CATEGORIES } from 'queries';

export const useProductCategories = (value: string): ProductCategoryHook => {
  const { data, loading } = useQuery<Categories>(CATEGORIES);
  const [categories, setCategories] = useState<Category[]>(data?.categories || []);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    setCategories(data?.categories || []);

    const articleList = data?.categories.map((category) => {
      return category.categoryArticles.articles.map((product) => {
        return product;
      });
    });

    setFilteredProducts(articleList ? articleList[0] : []);
  }, [loading, data]);

  useEffect(() => {
    const filter = categories.map((category) => {
      return category.categoryArticles.articles.filter((product) => {
        return product.name.toLowerCase().includes(value.toLowerCase());
      });
    });

    setFilteredProducts(filter[0]);
  }, [value]);

  return { loading, filteredProducts, categories };
};
