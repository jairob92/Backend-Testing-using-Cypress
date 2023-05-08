/// <reference types="Cypress" />
describe("Test Employees", () => {
  it("Get Employees", () => {
    cy.request({
      url: "localhost:3000/employees",
      method: "GET",
    }).then((response) => {
      expect(response.status).to.eq(200),
        expect(response.body[0]).to.have.property("id");
      expect(response.body[0].first_name).to.be.equal("Jairo");
    });
  });
  it("Get Employees by id", () => {
    cy.fixture("data-test").then(function (datos) {
      this.datos = datos;
      cy.log("id", this.datos.id);
      cy.request({
        url: `localhost:3000/employees/${this.datos.id}`,
        method:"GET"
      }).then((response) => {
        expect(response.status).to.eq(200),
          expect(response.body).to.have.property("id");
        expect(response.body.first_name).to.be.equal(
          `${this.datos.first_name}`
        );
      });
    });
  });
  it("Get Employees doesn'exist", () => {
    cy.request({
      url: "localhost:3000/employees/99",
      method:"GET",
      failOnStatusCode:false,
    }).then((response) => {
      expect(response.status).to.eq(404)
    });
  });
});
