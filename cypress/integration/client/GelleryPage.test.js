describe("GalleryPage", () => {
  it("Should check  GalleryPage", () => {
    cy.visit("/");
    cy.get("nav").contains("Galeria").click();
    cy.get(".gallery-page__arrows-container--right").click();
    cy.contains("Przebieg naszej pracy").should("be.visible");

    cy.get(".gallery-page__image").first().click();
    cy.get(".gallery-page__full-screen-image").should("be.visible");

    cy.get(".gallery-page__button").click();
    cy.get(".gallery-page__full-screen-image").should("not.exist");
  });
});
