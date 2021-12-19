import "cypress-file-upload";

describe("NewOrderPage", () => {
  it("Should check ContactForm", () => {
    cy.visit("/");
    cy.get("nav").contains("Nowe zlecenie").click();

    cy.get(`input[name="names"]`).type("Test names");
    cy.get(`input[name="email"]`).type("Test email");
    cy.get(`input[name="phone"]`).type("997");

    cy.get(`select[name="yearContact"]`).select("2012");
    cy.get(`select[name="makeContact"]`).select("Audi");

    cy.get(`input[name="model"]`).type("E3");
    cy.get(`input[name="plate"]`).type("GD-74EF");
    cy.get(`input[name="paint"]`).type("BRO-33");
    cy.get(`input[value="Lakierowanie"]`).check();

    cy.get(`textarea[name="description"]`).type("Test desc");

    cy.fixture("testPicture.png").then((fileContent) => {
      cy.get('input[type="file"]').attachFile({
        fileContent: fileContent.toString(),
        fileName: "testPicture.png",
        mimeType: "image/png",
      });
    });

    cy.get(`textarea`).type("Message");
    cy.get(`input[name="privacy"]`).check();
    cy.get(".contact-submit-button").click();

    cy.location("pathname").should("equal", "/podziekowania");
  });

  it("Should check Calculator", () => {
    cy.visit("/");
    cy.get("nav").contains("Nowe zlecenie").click();

    cy.get(`select[name="calculatorYear"]`).select("2000");
    cy.get(`select[name="calculatorMake"]`).select("BMW");

    cy.get(`input[value="Lakierowanie"]`).check();
    cy.get(`input[value="Średnie"]`).check();

    cy.get(`select[name="panels"]`).select("1");

    cy.get(`.calculator-submit-button`).click();

    cy.get(".calculator-card").should("contain", "koszt");
  });
});
