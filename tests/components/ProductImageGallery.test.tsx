import { render, screen } from "@testing-library/react";
import ProductImageGallery from "../../src/components/ProductImageGallery";

describe("ProductImageGallery", () => {
  const imageUrls: string[] = ["abc", "xyz"];

  it("should render nothing when image array is empty", () => {
    const { container } = render(<ProductImageGallery imageUrls={[]} />);

    expect(container).toBeEmptyDOMElement();
  });

  it("should render nothing when image array is empty", () => {
    const { container } = render(<ProductImageGallery imageUrls={imageUrls} />);

    expect(container).not.toBeEmptyDOMElement();

    const images = screen.getAllByRole("img");

    expect(images).toHaveLength(2);
    imageUrls.forEach((url, index) => {
      expect(images[index]).toHaveAttribute("src", url);
    });
  });
});
