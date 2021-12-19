describe("ContactPage", () => {
  it("Should visit ContactPage and send contact request", () => {
    cy.visit("/");
    cy.get("nav").contains("Kontakt").click();

    cy.get(`input[name="name"]`).type("Test name");
    cy.get(`input[name="email"]`).type("Test email");
    cy.get(`textarea`).type("Message");
    cy.get("button").click();
    cy.get(".form-confirmation").should("contain", "kontakt");
  });
});
