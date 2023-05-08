describe("Validate Add New Employee",()=>{
    it("Add Employee request",()=>{
        const clientData=require('../fixtures/new-costumer')
        cy.request({
            url:"localhost:3000/employees/",
            method:"POST",
            body:clientData,
            

        }).then((response)=>{
            expect(response.status).to.eq(201)
            expect(response.body).have.property("first_name")
        })
    })
})