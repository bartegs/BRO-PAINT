describe("Navigation", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should visit HomePage", () => {
    cy.get("nav").contains("Strona główna").click();
    cy.location("pathname").should("equal", "/");
  });

  it("Should visit NewOrderPage", () => {
    cy.get("nav").contains("Nowe zlecenie").click();
    cy.location("pathname").should("equal", "/nowe-zlecenie");
  });

  it("Should visit OrderStatusPage", () => {
    cy.get("nav").contains("Status zlecenia").click();
    cy.location("pathname").should("equal", "/status-zlecenia");
  });

  it("Should visit AboutUsPage", () => {
    cy.get("nav").contains("O nas").click();
    cy.location("pathname").should("equal", "/o-nas");
  });

  it("Should visit GalleryPage", () => {
    cy.get("nav").contains("Galeria").click();
    cy.location("pathname").should("equal", "/galeria");
  });

  it("Should visit ContactPage", () => {
    cy.get("nav").contains("Kontakt").click();
    cy.location("pathname").should("equal", "/kontakt");
  });

  it("Should visit Employee", () => {
    cy.get("nav").contains("Pracownik").click();
    cy.location("pathname").should("equal", "/pracownik/logowanie");
  });
});
