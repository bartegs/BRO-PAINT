describe("Navigation", () => {
  it("Should visit OrderManagementPage ", () => {
    cy.visit("/pracownik/");

    cy.get("nav").contains("Zarządzanie zleceniami").click();
    cy.location("pathname").should(
      "equal",
      "/pracownik/zarzadzanie-zleceniami"
    );
  });

  it("Should visit AwaitingOrderPage ", () => {
    cy.visit("/pracownik/");

    cy.get("nav").contains("Nowe zgłoszenia").click();
    cy.location("pathname").should("equal", "/pracownik/");
  });

  it("Should logout", () => {
    cy.contains("a", "Wyloguj się").click();
    cy.location("pathname").should("equal", "/pracownik/logowanie");
  });
});
