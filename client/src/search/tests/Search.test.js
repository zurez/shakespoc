import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import * as hooks from "../../hooks/useFetchPokemon.hook";
import SearchInput from "../components/SearchInput";
import Search from "../Search";

describe("Tests for the search page", () => {
  beforeEach(() => {});
  it("tests for the presence of button and input on the search page", async () => {
    render(<Search />);
    await waitFor(() => {
      expect(screen.getByText(/Find your pokemon!/i)).toBeInTheDocument();
    });
    expect(screen.getByLabelText(/eg: Pikachu/i)).toBeInTheDocument();
  });

  it("tests for calling setPokeName method from the hook with the input value", async () => {
    const onClick = jest.fn();
    const loading = false;

    render(<SearchInput onClick={onClick} loading={loading} />);

    const input = screen.getByLabelText(/eg: Pikachu/i);
    fireEvent.change(input, { target: { value: "pikachu" } });
    expect(input.value).toBe("pikachu");

    const button = screen.getByText(/Find your pokemon!/i);

    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
