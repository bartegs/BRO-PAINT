describe("AwaitingOrderPage", () => {
  it("Should visit AwaitingOrderPage", () => {
    cy.visit("/pracownik/");

    cy.get(".order-card").first().find("span .icon--show-more").click();
    cy.contains("Uwagi").should("be.visible");

    cy.get(".cross").click();
    cy.contains("Uwagi").should("not.exist");
  });
});
