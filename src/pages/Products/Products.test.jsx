import { render, screen, fireEvent } from '@testing-library/react';
import { AppWrapper } from '../../utils/testing';
import Products from './';
import categories from '../../mocks/en-us/product-categories.json';
import products from '../../mocks/en-us/products.json';

const renderComponent = () =>
  render(
    <AppWrapper>
      <Products />
    </AppWrapper>
  );

describe('Product Category Sidebar ', () => {
  beforeEach(() => {
    renderComponent();
  });

  it('renders data from API', async () => {
    const categoryTextList = await screen.findAllByTestId('category-checkbox-text');
    categoryTextList.forEach((category, index) => expect(category).toHaveTextContent(categories.results[index].data.name));
  });

  it('filters on click', async () => {
    const categoryIndex = 1;
    const categoryList = await screen.findAllByTestId('category-checkbox');
    fireEvent.click(categoryList[categoryIndex]);
    const productCardCategoryList = await screen.findAllByTestId('product-card-category');
    expect(productCardCategoryList[0].textContent).toBe(categories.results[categoryIndex].data.name.toLowerCase());
  });
});

describe('Product List Pagination ', () => {
  beforeEach(() => {
    renderComponent();
  });
  it('renders correctly page numbers', async () => {
    const pageList = await screen.findAllByTestId(/pagination-page/);
    const lastPage = pageList[pageList.length - 1];
    expect(parseInt(lastPage.textContent)).toBe(products.total_pages);
  });

  it('prev button is diabled on first page', async () => {
    const prevButton = await screen.findByTestId('pagination-prev-page');
    expect(prevButton).toBeDisabled();
  });

  it('prev and next buttons are working correctly', async () => {
    const prevActivePage = await screen.findByTestId('pagination-page-active');
    const nextButton = await screen.findByTestId('pagination-next-page');
    fireEvent.click(nextButton);
    const activePage = await screen.findByTestId('pagination-page-active');
    expect(parseInt(activePage.textContent)).toBe(parseInt(prevActivePage.textContent) + 1);
    const prevButton = await screen.findByTestId('pagination-prev-page');
    fireEvent.click(prevButton);
    const newActivePage = await screen.findByTestId('pagination-page-active');
    expect(parseInt(newActivePage.textContent)).toBe(parseInt(activePage.textContent) - 1);
  });

  it('next button is diabled on last page', async () => {
    const pageList = await screen.findAllByTestId('pagination-page');
    const lastPage = pageList[pageList.length - 1];
    fireEvent.click(lastPage);
    const nextButton = await screen.findByTestId('pagination-next-page');
    expect(nextButton).toBeDisabled();
  });
});
