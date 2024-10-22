import { render, screen } from "@testing-library/react";
import UserList from "../../src/components/UserList";

const users = [
  {
    id: 1,
    name: "rashed",
    isAdmin: true,
  },
  {
    id: 2,
    name: "jony",
    isAdmin: false,
  },
];

describe("UserList", () => {
  it("should render no users when users array is empty", () => {
    render(<UserList users={[]} />);

    expect(screen.getByText(/no users/i)).toBeInTheDocument();
  });

  it("should render user link with user name when users array is not empty", () => {
    render(<UserList users={users} />);

    users.forEach((user) => {
      const link = screen.getByRole("link", { name: user.name });

      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", `/users/${user.id}`);
    });
  });
});
