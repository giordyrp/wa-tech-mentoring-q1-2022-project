import React from 'react';
import Layout from '../../components/Layout';
import Slider from '../../components/Slider';
import Carousel from '../../components/Carousel';
import CategoryCard from '../../components/CategoryCard';
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';
import useQueryAPI from '../../hooks/useQueryAPI';

const Home = () => {
  const banners = useQueryAPI([
    ['q', ['at', 'document.type', 'banner']],
    ['lang', 'en-us'],
    ['pageSize', '5'],
  ]);
  const categories = useQueryAPI([
    ['q', ['at', 'document.type', 'category']],
    ['lang', 'en-us'],
    ['pageSize', '30'],
  ]);
  const featuredProducts = useQueryAPI([
    ['q', ['at', 'document.type', 'product']],
    ['q', ['at', 'document.tags', ['Featured']]],
    ['lang', 'en-us'],
    ['pageSize', '16'],
  ]);

  return (
    <Layout>
      <Slider banners={banners.data} loading={banners.loading}/>
      <Carousel
          title="Categories"
          elements={categories.data}
          elementName="category"
          card={CategoryCard}
          loading={categories.loading}
        />
      <FeaturedProducts products={featuredProducts.data} loading={featuredProducts.loading}/>
    </Layout>
  );
};

export default Home;
