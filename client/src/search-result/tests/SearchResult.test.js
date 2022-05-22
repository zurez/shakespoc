import { render, screen, waitFor } from "@testing-library/react";
import SearchResult from "../SearchResult";

const reset = jest.fn();
const successProps = {
  name: "Zurez",
  sprite: "https://foo.bar/0.jpg",
  description: "This is for test only",
  reset,
  error: null,
};
describe("Tests for the search result page", () => {
  it.only("tests for successful result", async () => {
    render(<SearchResult {...successProps} />);
    await waitFor(() => {
      expect(screen.getByText(successProps.name)).toBeInTheDocument();
    });
    expect(screen.getByText("Search again?")).toBeInTheDocument();
    expect(screen.getByText(successProps.description)).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});
