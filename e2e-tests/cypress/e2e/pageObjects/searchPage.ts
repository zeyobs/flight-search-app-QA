class searchPage {
  
  elements = {
    // The IDs of the search page elements are inconsistent and they might change after every build, so it's more suitable to not use the whole ID.
    fromComboInput: () => cy.get('input[id^="headlessui-combobox-input-"]').first(), 
    toComboInput: () => cy.get('input[id^="headlessui-combobox-input-"]').eq(1),
    fromBtn: () => cy.get('button[type=button]').first(),
    toBtn: () => cy.get('button[type=button]').eq(1),
    flightCitiesPopup: () => cy.get("ul > li").find('span'),
    flightSearchResults: () => cy.get('ul[role="list"]').find('li'),
    texts: () => cy.get('main').find('p'),
  };

  selectCity(city: string) {
    this.elements.flightCitiesPopup().contains(city).click();
  }
};

export default searchPage;
