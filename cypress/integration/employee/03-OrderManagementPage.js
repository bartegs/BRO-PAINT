describe("OrderManagementPage", () => {
  it("Should ", () => {
    cy.visit("/pracownik/");

    cy.get(`input[name="login"]`).type("seba");
    cy.get(`input[name="password"]`).type("test");
    cy.contains("button", "Zaloguj").click();

    cy.get(".icon--fact-check").click();
    cy.wait(1000);

    cy.contains("przydziel sub-etap").first().click({ force: true });
    cy.get("#react-select-2-listbox").contains("zlecenie złożone").click();

    cy.contains("przydziel pracownika").first().click({ force: true });
    cy.contains("Sebastian Andryszak").click();

    cy.contains("Zatwierdź").first().click();
  });
});
