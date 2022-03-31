import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route, Switch } from 'react-router';
import { AppWrapper } from '../../utils/testing';
import Products from '../Products';
import Cart from './';
import products from '../../mocks/en-us/products.json';

const renderWithRoute = (route) => {
  render(
    <AppWrapper>
      <MemoryRouter initialEntries={[route]}>
        <Switch>
          <Route path="/products" component={Products} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </MemoryRouter>
    </AppWrapper>
  );
};

describe('cart is empty', () => {
  it('renders empty message', async () => {
    renderWithRoute('/cart');
    const message = await screen.findByText(/empty/);
    expect(message).toBeInTheDocument();
  });
});

const countOfProductsToAdd = 5;

const addProductsToCart = async () => {
  renderWithRoute('/products');
  const addToCartButtons = await screen.findAllByTestId('add-to-cart-button');

  for (let i = 0; i < countOfProductsToAdd; i++) {
    fireEvent.click(addToCartButtons[i]);
  }

  const cartHeaderButton = await screen.findByTestId('cart-header-button');
  fireEvent.click(cartHeaderButton);
};

const setProductCount = async (index, count) => {
  const quantityInputs = await screen.findAllByTestId('quantity-input');
  const counToAdd = count;
  fireEvent.change(quantityInputs[index], { target: { value: counToAdd } });
  fireEvent.blur(quantityInputs[index]);
};

describe('cart has products', () => {
  beforeEach(async () => {
    await addProductsToCart();
  });

  test('renders list of products', async () => {
    const {
      data: { mainimage, name, price },
    } = products.results[0];

    const pName = await screen.findByRole('heading', { name });
    const pPrice = await screen.findAllByText(`$${price}`);
    const pImage = await screen.findByAltText(mainimage.alt);
    const pSubtotal = parseInt((await screen.findAllByTestId('product-subtotal'))[0].textContent);
    const pRemoveButtons = await screen.findAllByTestId('remove-product-button');

    expect(pName).toBeInTheDocument();
    expect(pPrice.length > 0).toBeTruthy();
    expect(pImage).toBeInTheDocument();
    expect(pSubtotal).toBe(price);
    expect(pRemoveButtons.length).toBe(countOfProductsToAdd);
  });

  test('cart total is the sum of subtotals', async () => {
    const subtotals = await screen.findAllByTestId('product-subtotal');
    const subtotalSum = subtotals.reduce((acc, st) => acc + parseInt(st.textContent), 0);
    const cartTotal = await screen.findByTestId('cart-total');
    expect(subtotalSum).toBe(parseInt(cartTotal.textContent));
  });

  test('product count does not exceed stock', async () => {
    const productIndex = 0;
    const counToAdd = 10000;
    await setProductCount(productIndex, counToAdd);
    const increaseCountButton = await screen.findAllByTestId('increase-count-button');
    expect(increaseCountButton[productIndex]).toBeDisabled();
  });

  test('product is removed correctly', async () => {
    const productIndex = 0;
    const pName = await screen.findByRole('heading', { name: products.results[0].data.name });
    const pRemoveButtons = await screen.findAllByTestId('remove-product-button');
    fireEvent.click(pRemoveButtons[productIndex]);
    expect(pName).not.toBeInTheDocument();
  });
});
