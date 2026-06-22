import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Crix Technology heading', () => {
  render(<App />);
  expect(screen.getByText(/CRIX/i)).toBeInTheDocument();
});

test('renders Apply for Internship button', () => {
  render(<App />);
  expect(screen.getAllByText(/Apply for Internship/i).length).toBeGreaterThan(0);
});
