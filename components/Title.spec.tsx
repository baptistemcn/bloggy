import { render } from "@testing-library/react";
import { Title } from "./Title";

describe("Title component", () => {
  it("should render", () => {
    render(<Title label="Test" />);
  });
});
