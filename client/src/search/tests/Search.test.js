import { render, screen, waitFor } from "@testing-library/react";
import Search from "../Search";

describe.skip("Tests for the search page", () => {
  it("tests for the presence of button and input on the search page", async () => {
    render(<Search />);
    await waitFor(() => {
      expect(screen.getByText("Find your pokemon!")).toBeInTheDocument();
    });
    expect(screen.getByLabelText("eg: Pikachu")).toBeInTheDocument();
  });
});
