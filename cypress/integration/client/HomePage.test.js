const orderId = "61afb3695a431b0016159acf";

describe("HomePage", () => {
  it("Should visit HomePage", () => {
    cy.visit("/");
  });

  it("Should check CheckStatusForm and be redirected to /status-zlecenia", () => {
    cy.get(`input[type="text"]`).type(orderId);
    cy.get(`button[type="submit"]`).click();

    cy.location("pathname").should("equal", "/status-zlecenia");
  });
});
