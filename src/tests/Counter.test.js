import { render, screen, fireEvent } from '@testing-library/react';
import Counter from "../components/Counter";

beforeEach(() => {
  render(<Counter />);
})

test('renders counter message', () => {
  const msg = screen.getByText('Counter');
  expect(msg).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const zeroCount = screen.getByTestId("count");
  expect(zeroCount).toHaveTextContent("0");
});

test('clicking + increments the count', () => {
  fireEvent.click(screen.getByText("+"));
  const inc = screen.getByTestId("count");
  expect(inc).toHaveTextContent("1");
});

test('clicking - decrements the count', () => {
  fireEvent.click(screen.getByText("-"));
  const dec = screen.getByTestId("count");
  expect(dec).toHaveTextContent("-1");
});