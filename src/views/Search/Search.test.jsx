import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router';
import { AppWrapper, wait } from '../../utils/testing';
import Search from './';

const renderWithSearchTerm = (term) => {
  render(
    <AppWrapper>
      <MemoryRouter initialEntries={[`/search?q=${term}`]}>
        <Route path="/search" component={Search} />
      </MemoryRouter>
    </AppWrapper>
  );
};

test('renders results when term is found', async () => {
  const term = 'Fair Isle Snowflake';
  renderWithSearchTerm(term);
  const matches = await screen.findAllByTestId('product-card');
  expect(matches.length > 0).toBeTruthy();
});

test('renders no results messsage when term is not found', async () => {
  const term = 'qwertyuiop';
  renderWithSearchTerm(term);
  const message = await screen.findByText(/no results/i);
  expect(message).toBeInTheDocument();
});
