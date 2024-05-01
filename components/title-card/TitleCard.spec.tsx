import { render } from "@testing-library/react";
import { TitleCard } from "./TitleCard";

const author = "mock author";
const label = "mock label";
const title = "mock title";

describe("Title Card Component", () => {
  let spy: jest.SpyInstance;

  beforeEach(() => {
    spy = jest.spyOn(console, "error").mockImplementation(() => null);
  });

  afterEach(() => {
    spy.mockRestore();
  });

  it("should render", () => {
    render(<TitleCard {...{ author, label, title }} />);
  });

  it("should render a title", () => {
    const { getByTestId } = render(<TitleCard {...{ author, label, title }} />);

    const titleElement = getByTestId("title");

    expect(titleElement).toBeTruthy();
    expect(titleElement).toBeInTheDocument();

    expect(titleElement).toHaveTextContent("mock title");
  });

  it("should render a label", () => {
    const { getByTestId } = render(<TitleCard {...{ author, label, title }} />);

    const labelElement = getByTestId("label");

    expect(labelElement).toBeTruthy();
    expect(labelElement).toBeInTheDocument();

    expect(labelElement).toHaveTextContent("mock label");
  });

  it("should render an author", () => {
    const { getByTestId } = render(<TitleCard {...{ author, label, title }} />);

    const authorElement = getByTestId("author");

    expect(authorElement).toBeTruthy();
    expect(authorElement).toBeInTheDocument();

    expect(authorElement).toHaveTextContent("By mock author");
  });
});
