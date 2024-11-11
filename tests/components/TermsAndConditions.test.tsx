import { render, screen } from "@testing-library/react";
import TermsAndConditions from "../../src/components/TermsAndConditions";
import userEvent from "@testing-library/user-event";

describe("TermsAndConditions", () => {
  const renderComponent = () => {
    render(<TermsAndConditions />);

    return {
      heading: screen.getByRole("heading"),
      button: screen.getByRole("button"),
      checkbox: screen.getByRole("checkbox"),
      user: userEvent.setup(),
    };
  };

  it("should render with correct text and initial state", () => {
    const { heading, checkbox, button } = renderComponent();

    expect(heading).toHaveTextContent("Terms & Conditions");
    expect(checkbox).not.toBeChecked();
    expect(button).toBeDisabled();
  });

  it("should enable the button when the checkbox is checked", async () => {
    const { checkbox, button, user } = renderComponent();

    await user.click(checkbox);
    expect(checkbox).toBeChecked();
    expect(button).toBeEnabled();
  });
});
