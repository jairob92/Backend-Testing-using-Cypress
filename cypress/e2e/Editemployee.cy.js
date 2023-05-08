describe("Validate Edit New Employee",()=>{
    it("Add Employee request",()=>{
        const clientData=require('../fixtures/new-costumer')
        cy.log(clientData.email)
        // This code sends a PUT request to update an employee's information.
        cy.request({
            url:"localhost:3000/employees/7",
            method:"PUT",
            body:{
                first_name:clientData.first_name,
                second_name: clientData.second_name,
                surname:clientData.surname,
                email:clientData.email,
                address:clientData.address
                
            }
        }).then((response)=>{
            expect(response.status).to.eq(200)
            // This code asserts that the response body contains the updated employee's first name and email address.
            expect(response.body).have.property("first_name")
            expect(response.body).have.property("email")
        })
    })
    });