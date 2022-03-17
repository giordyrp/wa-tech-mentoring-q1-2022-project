import { render, screen } from '@testing-library/react';

import { AppWrapper } from '../../utils/testing';
import Header from './Header';

it('renders header logo', () => {
  render(
    <AppWrapper>
      <Header />
    </AppWrapper>
  );
  const logo = screen.getByTestId('header-logo');
  expect(logo).toBeInTheDocument();
});
