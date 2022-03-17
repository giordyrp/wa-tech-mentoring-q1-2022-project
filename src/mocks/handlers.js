import _ from 'lodash';
import { rest } from 'msw';
import banners from './en-us/featured-banners.json';
import categories from './en-us/product-categories.json';
import products from './en-us/products.json';

export const handlers = [
  rest.get('https://wizeline-academy.cdn.prismic.io/api/v2/documents/search', (req, res, ctx) => {
    const documentType = req.url.searchParams.getAll('q')[0];
    let data = { results: [] };
    if (documentType.includes('banner')) {
      data = banners;
    }
    if (documentType.includes('category')) {
      data = categories;
    }
    if (documentType.includes('product')) {
      data = _.cloneDeep(products);

      const filterQuery = req.url.searchParams.getAll('q').find(elem => elem.includes('any'));
      if (filterQuery) data.results = data.results.filter(product => filterQuery.includes(product.data.category.id));
      
      const page = req.url.searchParams.get('page');
      if (page) data.page = parseInt(page);

      let productId = req.url.searchParams.getAll('q').find(elem => elem.includes('id'));
      if (productId) data.results = data.results.filter(product => productId.includes(product.id));

      let searchTerm = req.url.searchParams.getAll('q').find(elem => elem.includes('fulltext'));
      if (searchTerm) {
        const regex = new RegExp('.*, "(.*)"\\x29.*');
        searchTerm = regex.exec(searchTerm)[1];
        data.results = data.results.filter(product => product.data.name.includes(searchTerm));
      }
      data.results_size = data.results.length;
    }

    return res(ctx.status(200), ctx.json(data));
  }),
  rest.get('https://wizeline-academy.cdn.prismic.io/api/v2', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ refs: [{ id: 'master', ref: 'YZaBvBIAACgAvnOP', label: 'Master', isMasterRef: true }]}));
  }),
];

   
