import { render, screen } from "@testing-library/react";
import UserAccount from "../../src/components/UserAccount";
import { User } from "../../src/entities";

describe("UserAccount", () => {
  const renderComponent = (user: User) => {
    render(<UserAccount user={user} />);
    return {
      button: screen.queryByRole("button", {
        name: /edit/i,
      }),
    };
  };

  it("should render user name", () => {
    const user: User = {
      id: 1,
      name: "rashed",
      isAdmin: true,
    };
    renderComponent(user);

    expect(screen.getByText(user.name)).toBeInTheDocument();
  });

  it("should render edit button while user is admin", () => {
    const user: User = {
      id: 1,
      name: "rashed",
      isAdmin: true,
    };
    const { button } = renderComponent(user);

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/edit/i);
  });

  it("should not render edit button while user is not admin", () => {
    const user: User = {
      id: 1,
      name: "rashed",
      isAdmin: false,
    };
    const { button } = renderComponent(user);

    expect(button).not.toBeInTheDocument();
  });
});
