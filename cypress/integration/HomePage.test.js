describe("HomePage", () => {
  it("Should visit HomePage", () => {
    cy.visit("/");
  });

  it("Should check CheckStatusForm and be redirected to /status-zlecenia", () => {
    cy.get(`input[type="text"]`).type("616d39d6e94db9794e3eb411");
    cy.get(`button[type="submit"]`).click();

    cy.location("pathname").should("equal", "/status-zlecenia");
  });
});
