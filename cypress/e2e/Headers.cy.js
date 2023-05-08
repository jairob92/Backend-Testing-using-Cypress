/// <reference types="Cypress" />
describe("Test Employees", () => {
    it("Get Employees", () => {
      cy.request({
        url: "localhost:3000/employees",
        method: "GET",
        // This code uses the .its() function to access the "content-type" header of the HTTP response and then asserts that it includes the string "application/json" using the .should() function.
      }).its('headers').its('content-type').should('include','application/json')
    });
  });
  