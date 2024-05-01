import { render } from "@testing-library/react";
import { Divider } from "./Divider";
import { exec } from "child_process";

describe("Divider Ui component", () => {
  it("should render", () => {
    render(<Divider title="Title" />);
  });

  it("should render title", () => {
    const { getByTestId, getByText } = render(<Divider title="Title" />);

    const divider = getByTestId("divider");

    expect(divider).toBeTruthy();
    expect(divider).toBeInTheDocument();

    const title = getByText("Title");

    expect(title).toBeTruthy();
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent("Title");
  });

  it("should render full divider", () => {
    const { getByTestId, getByText } = render(<Divider title="Title" full />);

    const divider = getByTestId("divider");

    expect(divider).toBeTruthy();
    expect(divider).toBeInTheDocument();

    const title = getByText("Title");

    expect(title).toBeTruthy();
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent("Title");

    const button = getByTestId("button");

    expect(button).toBeTruthy();
    expect(button).toBeInTheDocument();
  });

  it("should render a button with a label on full divider", () => {
    const { getByTestId } = render(
      <Divider title="Title" full label="Label" />,
    );

    const divider = getByTestId("divider");

    expect(divider).toBeTruthy();
    expect(divider).toBeInTheDocument();

    const button = getByTestId("button");

    expect(button).toBeTruthy();
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Label");
  });

  it("should call onClick on button click", () => {
    const onClick = jest.fn();

    const { getByTestId } = render(
      <Divider title="Title" full label="Label" onClick={onClick} />,
    );

    const button = getByTestId("button");

    expect(button).toBeTruthy();
    expect(button).toBeInTheDocument();

    button.click();

    expect(onClick).toHaveBeenCalled();
  });
});
