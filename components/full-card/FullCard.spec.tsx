import { render } from "@testing-library/react";
import { FullCard } from "./FullCard";

const author = "mock author";
const label = "mock label";
const title = "mock title";
const description = "mock description";
const date = "2024-01-04T00:52:58.601Z";

describe("Full Card component", () => {
  let spy: jest.SpyInstance;

  beforeEach(() => {
    spy = jest.spyOn(console, "error").mockImplementation(() => null);
  });

  afterEach(() => {
    spy.mockRestore();
  });

  it("should render", () => {
    render(<FullCard {...{ author, label, title, description, date }} />);
  });

  it("should render a title", () => {
    const { getByText } = render(
      <FullCard {...{ author, label, title, description, date }} />,
    );

    const titleElement = getByText("mock title");

    expect(titleElement).toBeTruthy();
    expect(titleElement).toBeInTheDocument();
  });

  it("should render a label", () => {
    const { getByText } = render(
      <FullCard {...{ author, label, title, description, date }} />,
    );

    const labelElement = getByText("mock label");

    expect(labelElement).toBeTruthy();
    expect(labelElement).toBeInTheDocument();
  });

  it("should render an author", () => {
    const { getByText } = render(
      <FullCard {...{ author, label, title, description, date }} />,
    );

    const authorElement = getByText("mock author");

    expect(authorElement).toBeTruthy();
    expect(authorElement).toBeInTheDocument();
  });

  it("should render a description", () => {
    const { getByText } = render(
      <FullCard {...{ author, label, title, description, date }} />,
    );

    const descriptionElement = getByText("mock description...");

    expect(descriptionElement).toBeTruthy();
    expect(descriptionElement).toBeInTheDocument();
  });

  it("should render a date", () => {
    const { getByText } = render(
      <FullCard {...{ author, label, title, description, date }} />,
    );

    const dateElement = getByText("January 4, 2024");

    expect(dateElement).toBeTruthy();
    expect(dateElement).toBeInTheDocument();
  });
});
