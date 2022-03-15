import React from 'react';
import { act, render } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { CATEGORIES } from 'queries';
import { Products } from './Products';

const mocks = [
  {
    request: {
      query: CATEGORIES,
      variables: {
        query: { ids: '156126', locale: 'de_DE' },
      },
    },
    result: {
      data: {
        categories: [
          {
            name: 'Möbel',
            articleCount: 78040,
            childrenCategories: [
              {
                name: 'Wohnzimmer',
                urlPath: 'kategorie/wohnzimmermoebel/',
                __typename: 'Category',
              },
            ],
            categoryArticles: {
              articles: [
                {
                  name: 'Premium Komfortmatratze Smood',
                  variantName: '180 x 200cm',
                  prices: {
                    currency: 'EUR',
                    regular: {
                      value: 54999,
                      __typename: 'ArticleRegularPrice',
                    },
                    __typename: 'ArticlePrices',
                  },
                  images: [
                    {
                      path: 'https://cdn1.home24.net/images/media/catalog/product/200x200/png/m/a/matratzenbezug-smood-webstoff-180-x-200cm-3477221.webp',
                      __typename: 'ArticleGalleryImage',
                    },
                  ],
                  __typename: 'Article',
                },
              ],
              __typename: 'CategoryArticles',
            },
            __typename: 'Category',
          },
        ],
      },
      extensions: {
        lexicon: {
          Mu: {},
          Words: {},
        },
      },
    },
  },
];

it('renders the ProductList', async () => {
  let rendered;
  await act(async () => {
    rendered = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        {Products}
      </MockedProvider>
    );
  });
  expect(rendered).toMatchSnapshot();
});
