import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import searchPage from "../pageObjects/searchPage.ts";

const search = new searchPage();

Given("The user is on the flight search page", () => {
  cy.visit("https://flights-app.pages.dev/");
});

When("The user enters {string} and {string} values to the flight search fields",
  (fromCity: string, toCity: string) => {
    search.elements.fromBtn().click();
    search.selectCity(fromCity);
  
    search.elements.toBtn().click();
    search.selectCity(toCity);  
  });

Then("The system should not allow to the search with identical values", () => {
  search.elements.fromComboInput().invoke('val').then((fromVal: string) => {
    search.elements.toComboInput().invoke('val').then((toVal: string) => {
      expect(fromVal).not.to.eq(toVal);
    });
  });
});

Then("The number of listed flights should match the number in listed flight count text", () => {
  search.elements.flightSearchResults().then((results) => {
    const length = results.length;
    search.elements.texts().should('contain', `Found ${length} items`);
  });
});
