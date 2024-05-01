import { render } from "@testing-library/react";
import { Card } from "./Card";
import exp from "constants";

const cardMock = {
  children: <p>Mock</p>,
};

describe("Card Ui Component", () => {
  it("should render", () => {
    render(<Card>{cardMock.children}</Card>);
  });

  it("should render children", () => {
    const { getByTestId } = render(<Card>{cardMock.children}</Card>);

    const card = getByTestId("card");

    expect(card).toBeTruthy();
    expect(card).toBeInTheDocument();
  });

  it("should render default class", () => {
    const { getByTestId } = render(<Card>{cardMock.children}</Card>);

    const card = getByTestId("card");

    expect(card).toBeTruthy();
    expect(card).toBeInTheDocument();

    expect(card).not.toHaveClass("");
  });

  it("should render custom class", () => {
    const { getByTestId } = render(
      <Card className="bg-red-500">{cardMock.children}</Card>,
    );

    const card = getByTestId("card");

    expect(card).toBeTruthy();
    expect(card).toBeInTheDocument();

    expect(card).toHaveClass("bg-red-500");
  });
});
