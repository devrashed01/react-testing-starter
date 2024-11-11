import { render, screen } from "@testing-library/react";
import ExpandableText from "../../src/components/ExpandableText";
import userEvent from "@testing-library/user-event";

describe("ExpandableText", () => {
  const renderComponent = (text: string) => {
    render(<ExpandableText text={text} />);

    return {
      article: screen.getByRole("article"),
      user: userEvent.setup(),
    };
  };

  it("should render the full text if less than 255 characters", () => {
    const text = "Short Text";
    renderComponent(text);

    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it("should truncate text if longer than 255 characters", async () => {
    const text = "a".repeat(256);
    renderComponent(text);
    const button = screen.getByRole("button");
    const truncatedText = text.substring(0, 255) + "...";

    expect(screen.getByText(truncatedText)).toBeInTheDocument();
    expect(button).toHaveTextContent(/more/i);
  });

  it("should render full text when text limit is over and isExpend true", async () => {
    const text = "a".repeat(256);
    const { article, user } = renderComponent(text);
    const button = screen.getByRole("button");
    await user.click(button);

    expect(button).toHaveTextContent(/less/i);
    expect(article).toHaveTextContent(text);
  });

  it("should not render button when text is less then the limit", async () => {
    renderComponent("1234");
    const button = screen.queryByRole("button");
    expect(button).not.toBeInTheDocument();
  });
});
