import searchPage from "../../pageObjects/searchPage";
import searchData from "../../fixtures/searchData.json";

describe("Search Pokemon Suite", () => {
  before(() => {
    cy.visit("/");
  });

  /**
   * Test to verify all the UI elements are visible
   */
  it("Check Elements are visible on initial page load",
    () => {
      cy.get(searchPage.searchField).should("be.visible");
      cy.get(searchPage.searchButton).should("be.visible");
      cy.contains(
        "Press find your pokemon button after entering the pokemon name."
      ).should("be.visible");
    }
  );

  /**
   * Test to check minium number of search characters
   */
  it("Search should require minimum 4 characters",
    () => {
      cy.get(searchPage.searchField).type(searchData.minLengthData, {
        delay: 200,
      });
      cy.get(searchPage.searchButton).click();
      cy.get(searchPage.cardHeader).should("have.text", "Not found!");
      cy.get(searchPage.cardDescription).should(
        "have.text",
        "Name must be more than 3 characters"
      );
      cy.get(searchPage.searchAgain).should("be.visible").click();
      cy.get(searchPage.searchButton).should("be.visible");
    }
  );

  /**
   * Test to verify happy path search flow
   */
  it( "Test Valid Search flow", () => {
    cy.get(searchPage.searchField).type(searchData.validPokemon, {
      delay: 200,
    });
    cy.get(searchPage.searchButton).click();
    cy.get(searchPage.cardHeader).should("have.text", searchData.validPokemon);
    cy.get(searchPage.cardDescription).should(
      "have.text",
      searchData.validPokemonDescription
    );
    cy.get(searchPage.searchAgain).should("be.visible");
  });

  /**
   * Test to verify too many search error
   */
  it( "Verify Too many Search Error", () => {
    const dataSize = searchData.tooManyReqErrorData.length;
    searchData.tooManyReqErrorData.forEach((poke, index) => {
      cy.get(searchPage.searchField).type(poke, { delay: 200 });
      cy.get(searchPage.searchButton).click();
      cy.wait(500);
      cy.get(searchPage.cardHeader).should("be.visible");
      cy.get(searchPage.searchAgain).should("be.visible");
      if (index === dataSize - 1) {
        cy.get(searchPage.cardDescription).should(
          "have.text",
          searchData.tooManyReqError
        );
      }
      cy.get(searchPage.searchAgain).click();
    });
  });

 /**
   * Test to verify happy path search flow
   */
  it( "Test invalid Search flow", () => {
    cy.get(searchPage.searchField).type(searchData.invalidPokemon, {
      delay: 200,
    });
    cy.get(searchPage.searchButton).click();
    cy.get(searchPage.cardHeader).should("have.text", "Not found!");
    cy.get(searchPage.cardDescription).should(
      "have.text",
      searchData.invalidPokemonDescription
    );
    cy.get(searchPage.searchAgain).should("be.visible");
  });

});
