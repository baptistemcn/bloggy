import { RootProvider } from "@/providers";
import { render } from "@testing-library/react";
import { FeedPopular } from "./FeedPopular";

describe("FeedPopular layout", () => {
  it("should render", () => {
    render(
      <RootProvider>
        <FeedPopular slug="mock-slug" />
      </RootProvider>,
    );
  });
});
