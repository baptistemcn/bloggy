import { render } from "@testing-library/react";
import { Label } from "./Label";

describe("Label Ui Component", () => {
  it("should render", () => {
    render(<Label count={3} label="Label" />);
  });

  it("should render a label", () => {
    const { getByTestId } = render(<Label count={3} label="Label" />);

    const label = getByTestId("label");

    expect(label).toBeTruthy();
    expect(label).toBeInTheDocument();

    expect(label).toHaveTextContent("Label");
  });

  it("should render a count", () => {
    const { getByTestId } = render(<Label count={3} label="Label" />);

    const count = getByTestId("count");

    expect(count).toBeTruthy();
    expect(count).toBeInTheDocument();

    expect(count).toHaveTextContent("3");
  });
});
