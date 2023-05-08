describe("Validate Add New Employee",()=>{
    it("Delete Employee request",()=>{
        cy.request({
            url:"localhost:3000/employees/7",
            method:"DElETE"
        }).then((response)=>{
            expect(response.status).to.eq(200)
        })
    })
})