import { screen } from "@testing-library/react";
import App from "./App";
import { renderWithProviders } from "./utils/test.utils";

// test passed
describe("button elements in the App", () => {
  test("three buttons should be rendered", () => {
    renderWithProviders(<App />);
    const buttonsEl = screen.getAllByRole("button");
    expect(buttonsEl.length).toBe(3);
  });
});

// test passed
describe("heading(h1) elements in the App", () => {
  test("heading(h1) should be rendered", () => {
    renderWithProviders(<App />);
    const h1El = screen.getByTitle(/heading/i);
    expect(h1El).toHaveTextContent(/Refresh/i);
  });
});
