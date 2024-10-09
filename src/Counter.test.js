import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Counter from "./Counter";

test("renders counter with initial value of 0", () => {
  render(<Counter />);
  const counterElement = screen.getByText(/Counter: 0/i);
  expect(counterElement).toBeInTheDocument();
});

test("increments counter by 1 when Increment button is clicked", () => {
  render(<Counter />);
  const incrementButton = screen.getByText(/Increment/i);
  fireEvent.click(incrementButton);
  const counterElement = screen.getByText(/Counter: 1/i);
  expect(counterElement).toBeInTheDocument();
});

test("decrements counter by 1 when Decrement button is clicked", () => {
  render(<Counter />);
  const decrementButton = screen.getByText(/Decrement/i);
  fireEvent.click(decrementButton);
  const counterElement = screen.getByText(/Counter: -1/i);
  expect(counterElement).toBeInTheDocument();
});
