import { render, screen } from "@testing-library/react";
import Button from "../components/Button";

// test passed
describe("button component", () => {
  test("the button should be rendered", () => {
    render(<Button />);
    const buttonEl = screen.getByRole("button");
    expect(buttonEl).toBeInTheDocument();
  });
});
