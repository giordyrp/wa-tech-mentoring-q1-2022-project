import Home from './';
import { render, screen } from '@testing-library/react';
import { AppWrapper } from '../../utils/testing';
import banners from '../../mocks/en-us/featured-banners.json';
import categories from '../../mocks/en-us/product-categories.json';
import products from '../../mocks/en-us/products.json';

beforeEach(() => {
  render(
    <AppWrapper>
      <Home />
    </AppWrapper>
  );
});

describe('Featured Banners', () => {
  it('renders data from API', async () => {
    const bannerTitle = await screen.findByRole('heading', { name: banners.results[0].data.title });
    expect(bannerTitle).toBeInTheDocument();
  });
});

describe('Carousel', () => {
  jest.setTimeout(10000);
  it('renders data from API', async () => {
    for (let category of categories.results) {
      expect(await screen.findByRole('img', { name: category.data.main_image.alt })).toBeInTheDocument();
      expect(await screen.findByText(category.data.name)).toBeInTheDocument();
    }
  });
});

describe('Featured Products', () => {
  it('renders data from API', async () => {
    for (let product of products.results) {
      expect(await screen.findByText(product.data.name)).toBeInTheDocument();
    }
  });
});
