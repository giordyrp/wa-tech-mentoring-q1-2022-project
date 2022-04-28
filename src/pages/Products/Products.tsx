import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import _cloneDeep from 'lodash/cloneDeep';
import useQueryApollo from 'hooks/useQueryApollo';
import { getCategories, getProducts } from 'queries';
import Layout from '../../components/Layout';
import ProductList from '../../components/ProductList';
import Section from '../../components/Section';
import Row from '../../components/Row';
import Col from '../../components/Col';
import ProductCategoryFilter from '../../components/ProductCategoryFilter';
import { deleteParam, setParam } from '../../utils/functions';

const productsQuery: any = [
  ['q', ['at', 'document.type', 'product']],
  ['lang', 'en-us'],
  ['pageSize', '12'],
];

const Products = () => {
  const categories = useQueryApollo('categories', getCategories);

  const products = useQueryApollo('products', getProducts);

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const location = useLocation();
  const history = useHistory();

  const onSelectCategory = (option: any) => {
    const categoryId = option.value;
    let newSelectedCategories = [...selectedCategories];
    if (selectedCategories.includes(categoryId)) {
      newSelectedCategories = selectedCategories.filter(
        (category) => category !== categoryId
      );
    } else {
      newSelectedCategories.push(categoryId);
    }
    history.push(
      newSelectedCategories.length > 0
        ? setParam('category', newSelectedCategories)
        : deleteParam('category')
    );
  };

  const onClearCategories = () => history.push(deleteParam('category'));

  const setStatesByURL = () => {
    const params = new URLSearchParams(location.search);
    const newProductsQuery = _cloneDeep(productsQuery);

    if (params.has('category')) {
      const categorySlugList = params.get('category')!.split(',');
      const categoryIdList: string[] = categorySlugList.map(
        (slug) => categories.data.items.find((category: any) => category.slug === slug).id
      );
      setSelectedCategories(categorySlugList);
      newProductsQuery.push(['q', ['any', 'my.product.category', categoryIdList]]);
    } else {
      setSelectedCategories([]);
    }

    if (params.has('page')) {
      const newPage = params.get('page')!;
      newProductsQuery.push(['page', newPage]);
    }

    // products.setQuery(newProductsQuery);
  };

  useEffect(() => {
    if (!categories.loading) setStatesByURL();
  }, [categories.loading, location.search]);

  return (
    <Layout>
      <Section title="Products">
        <Row>
          <Col xs={12} sm={4} md={3}>
            <ProductCategoryFilter
              categories={categories.data}
              loading={categories.loading}
              selected={selectedCategories}
              onSelect={onSelectCategory}
              onClear={onClearCategories}
            />
          </Col>
          <Col xs={12} sm={8} md={9}>
            <ProductList
              products={products.data}
              loading={products.loading}
              grid={{ xs: 12, sm: 6, lg: 4 }}
              pagination
            />
          </Col>
        </Row>
      </Section>
    </Layout>
  );
};

export default Products;
