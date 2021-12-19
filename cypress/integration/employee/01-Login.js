describe("Employee Login", () => {
  it("Should Login", () => {
    cy.visit("/pracownik/");

    cy.get(`input[name="login"]`).type("seba");
    cy.get(`input[name="password"]`).type("test");
    cy.contains("button", "Zaloguj").click();
    cy.location("pathname").should("equal", "/pracownik/");
  });
});
                                                                         