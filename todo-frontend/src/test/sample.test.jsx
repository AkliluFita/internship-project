import { render, screen } from "@testing-library/react";
import Sample from "../components/Sample";

describe("Sample component", () => {
  it("should render the Sample component correctly", () => {
    render(<Sample />);
    const element = screen.getByRole("heading", { name: "hello world" });
    expect(element).toBeInTheDocument();
  });
});
