import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import * as hooks from "../../hooks/useFetchPokemon.hook";
import Search from "../Search";

describe("Tests for the search page", () => {
  beforeEach(() => {});
  it("tests for the presence of button and input on the search page", async () => {
    render(<Search />);
    await waitFor(() => {
      expect(screen.getByText("Find your pokemon!")).toBeInTheDocument();
    });
    expect(screen.getByLabelText("eg: Pikachu")).toBeInTheDocument();
  });

  it("tests for calling setPokeName method from the hook with the input value", async () => {
    render(<Search />);
    const setPokemonName = jest.fn();
    jest.spyOn(hooks, "useFetchPokemon").mockReturnValueOnce({
      data: null,
      setPokemonName,
      error: null,
      loading: false,
    });

    const input = screen.getByLabelText("eg: Pikachu");
    fireEvent.change(input, { target: { value: "pikachu" } });
    expect(input.value).toBe("pikachu");

    const button = screen.getByText("Find your pokemon!");
    expect(button).toBeInTheDocument();
    fireEvent.click(button);

    await waitFor(() => {
      expect(setPokemonName).toHaveBeenCalledTimes(1);
    });
  });
});
