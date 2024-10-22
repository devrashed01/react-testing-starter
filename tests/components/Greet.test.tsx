import { render, screen } from "@testing-library/react";
import Greet from "../../src/components/Greet";

describe("group", () => {
  it("should render Hello with the name is provided", () => {
    render(<Greet name="rashed" />);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/rashed/);
  });

  it("should render Login button when name is not provided", () => {
    render(<Greet />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/login/i);
  });
});