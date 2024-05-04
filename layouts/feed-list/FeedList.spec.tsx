import { render } from "@testing-library/react";
import { FeedList } from "./FeedList";
import { RootProvider } from "@/providers";

describe("FeedList layout", () => {
  it("should render", () => {
    render(
      <RootProvider>
        <FeedList />
      </RootProvider>,
    );
  });
});
