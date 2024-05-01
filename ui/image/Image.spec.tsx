import { render } from "@testing-library/react";
import { ReImage } from "./Image";

const mockImage = {
  src: "https://via.placeholder.com/500",
  alt: "test",
};

describe("Image Ui Component", () => {
  let spy: jest.SpyInstance;

  beforeEach(() => {
    spy = jest.spyOn(console, "error").mockImplementation(() => null);
  });

  afterEach(() => {
    spy.mockRestore();
  });

  it("should render", () => {
    render(<ReImage src="https://via.placeholder.com/500" alt="test" />);
  });

  it("should render an image", () => {
    const { getByTestId } = render(
      <ReImage src="https://via.placeholder.com/500" alt="test" />,
    );

    const img = getByTestId("image");

    expect(img).toBeTruthy();
    expect(img).toBeInTheDocument();
  });

  it("should render an image with defined source", () => {
    const { getByTestId } = render(
      <ReImage src={mockImage.src} alt={mockImage.alt} />,
    );

    const img = getByTestId("image");

    expect(img).toBeTruthy();
    expect(img).toBeInTheDocument();

    expect(img).toHaveAttribute(
      "src",
      "/_next/image?url=https%3A%2F%2Fvia.placeholder.com%2F500&w=1080&q=75",
    );
  });

  it("should render an image with defined alt", () => {
    const { getByTestId } = render(
      <ReImage src={mockImage.src} alt={mockImage.alt} />,
    );

    const img = getByTestId("image");

    expect(img).toBeTruthy();
    expect(img).toBeInTheDocument();

    expect(img).toHaveAttribute("alt", mockImage.alt);
  });

  it("should render an image with default class", () => {
    const { getByTestId } = render(
      <ReImage src={mockImage.src} alt={mockImage.alt} />,
    );

    const img = getByTestId("image");

    expect(img).toBeTruthy();
    expect(img).toBeInTheDocument();

    expect(img).toHaveClass("rounded-lg");
  });

  it("should render an image with defined class", () => {
    const { getByTestId } = render(
      <ReImage
        src={mockImage.src}
        alt={mockImage.alt}
        className="bg-red-500"
      />,
    );

    const img = getByTestId("image");

    expect(img).toBeTruthy();
    expect(img).toBeInTheDocument();

    expect(img).toHaveClass("rounded-lg bg-red-500");
  });
});
