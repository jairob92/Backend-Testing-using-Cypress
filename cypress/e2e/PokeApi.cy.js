/// <reference types="Cypress" />
describe("Pokemon API Testing", () => {
  it("Get Pokemon", () => {
    cy.fixture("data-test").then(function (datos) {
      this.datos = datos;
      cy.request({
        url: `https://pokeapi.co/api/v2/pokemon/${this.datos.name_pokemon}/`,
        method: "GET",
      }).then((response) => {
        // It asserts that the response status is equal to 200, the first ability of the Pokemon is "cute-charm", and the response duration is less than 1000ms (1 second).
        expect(response.status).to.eq(200);
        expect(response.body.abilities[0].ability.name).to.be.equal("cute-charm")
        expect(response.duration).to.be.lessThan(1000)
      });
    });
  });
});
