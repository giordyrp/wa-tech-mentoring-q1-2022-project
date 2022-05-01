import React from 'react';
import Layout from 'components/Layout';
import Slider from 'components/Slider';
import Carousel from 'components/Carousel';
import CategoryCard from 'components/CategoryCard';
import FeaturedProducts from 'components/FeaturedProducts/FeaturedProducts';
import { listBanners } from 'graphql/queries';
import useGraphqlAPI from 'hooks/useGraphqlAPI';
import { getCategories, getProducts } from 'queries';
import useQueryApollo from 'hooks/useQueryApollo';

const Home = () => {
  const banners = useGraphqlAPI({
    query: listBanners,
  });

  const featuredProducts = useQueryApollo('products', getProducts, {
    variables: {
      query: {
        tags: 'Featured',
      },
    },
  });

  const categories = useQueryApollo('categories', getCategories);

  return (
    <Layout>
      <Slider banners={banners.data} loading={banners.loading} />
      <Carousel
        title="Categories"
        elements={categories.data}
        elementName="category"
        card={CategoryCard}
        loading={categories.loading}
      />
      <FeaturedProducts
        products={featuredProducts.data}
        loading={featuredProducts.loading}
      />
    </Layout>
  );
};

export default Home;
