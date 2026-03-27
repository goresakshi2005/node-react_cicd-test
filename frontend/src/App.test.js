import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the heading', () => {
  render(<App />);
  const heading = screen.getByText(/Simple React App/i);
  expect(heading).toBeInTheDocument();
});