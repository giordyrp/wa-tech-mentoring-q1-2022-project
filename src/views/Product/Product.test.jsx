import { render, screen, fireEvent } from '@testing-library/react';
import { Route, MemoryRouter } from 'react-router-dom';
import products from '../../mocks/en-us/products.json';
import { AppWrapper } from '../../utils/testing';
import Product from './';

const product = products.results[0];
const unavailableProduct = products.results[3];

const renderProduct = (product) => {
  render(
    <AppWrapper>
      <MemoryRouter initialEntries={[`/product/${product.id}`]}>
        <Route path="/product/:id" component={Product} />
      </MemoryRouter>
    </AppWrapper>
  );
};

test('renders data from API', async () => {
  renderProduct(product);
  const {
    tags,
    data: {
      name,
      sku,
      category: { slug: categoryName },
      price,
      description,
    },
  } = product;

  const pName = await screen.findByRole('heading', { name });
  const pPrice = await screen.findByText(`$${price}`);
  const pSku = await screen.findByText(new RegExp(sku));
  const pCategory = await screen.findByText(categoryName);
  const pDescription = await screen.findByText(description[0].text);
  const pTags = await screen.findByText(tags[0]);

  expect(pName).toBeInTheDocument();
  expect(pPrice).toBeInTheDocument();
  expect(pSku).toBeInTheDocument();
  expect(pCategory).toBeInTheDocument();
  expect(pDescription).toBeInTheDocument();
  expect(pTags).toBeInTheDocument();
});

test('renders quantity selector and `Add to Cart` button', async () => {
  renderProduct(product);
  const quantityInput = await screen.findByTestId('quantity-input');
  const addToCartButton = await screen.findByRole('button', { name: 'Add to Cart' });
  expect(quantityInput).toBeInTheDocument();
  expect(addToCartButton).toBeInTheDocument();
});

const setProductCount = async (count) => {
  const quantityInput = await screen.findByTestId('quantity-input');
  const counToAdd = count;
  fireEvent.change(quantityInput, { target: { value: counToAdd } });
  fireEvent.blur(quantityInput);
};

test('cart item total number is updated on adding to cart', async () => {
  renderProduct(product);
  const prevItemTotalNumber = (await screen.findByTestId('cart-header-button')).textContent;
  const counToAdd = 5;
  await setProductCount(counToAdd);
  const addToCartButton = await screen.findByRole('button', { name: 'Add to Cart' });
  fireEvent.click(addToCartButton);
  const itemTotalNumber = (await screen.findByTestId('cart-header-button')).textContent;
  expect(parseInt(itemTotalNumber)).toBe(parseInt(prevItemTotalNumber) + counToAdd);
});

test('`Add to Cart` button is disabled when product`s stock is zero', async () => {
  renderProduct(unavailableProduct);
  const addToCartButton = await screen.findByRole('button', { name: 'Add to Cart' });
  expect(addToCartButton).toBeDisabled();
});
