/// < reference types="cypress" />
describe('Verify GET request', () => {
    it('Validate GET Request, Status check', () => {
        cy.request('https://x8ki-letl-twmt.n7.xano.io/api:gHPd8le5/transaction/497').its('status').should('eq', 200)

    })
    it('Validate GET Request, Data check', () => {
        cy.request('https://x8ki-letl-twmt.n7.xano.io/api:gHPd8le5/transaction/497').then((response) => {
            expect(response.status).equal(200);
            expect(response.body).to.have.property('id', 497)
            expect(response.body).to.have.property('receivedCoinMarketPrice', 50)
            expect(response.body).to.have.property('created_at', 1675787913084)
        })
    })
})