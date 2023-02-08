/// <reference types="cypress" />
describe('Verify POST request', () => {
  it('Sending POST Request', () => {
    cy.request({
      method: 'POST',
      url: 'https://x8ki-letl-twmt.n7.xano.io/api:gHPd8le5/transaction',
      body: {
        "coin1": "INR",
        "coin2": "USDT",
        "coin1Amount": 300,
        "coin2Amount": 2
      }
    }).then((response) => {
      expect(response).property('status').to.equals(200)
      expect(response)
    })
  })
  it('Validate response', () => {
    cy.request({
      method: 'GET',
      url: 'https://x8ki-letl-twmt.n7.xano.io/api:gHPd8le5/transaction/497',
    }).then((response) => {
      expect(response.body).to.have.property('id')
      expect(response.body).to.have.property('created_at')
      expect(response.body).to.have.property('sentCoin')
      expect(response.body).to.have.property('receivedCoin')
      expect(response.body).to.have.property('receivedCoinAmount')
      expect(response.body).to.have.property('sentCoinAmount')

    })
  })
  it('Validate ID are different', () => {
    cy.request({
      method: 'GET',
      url: 'https://x8ki-letl-twmt.n7.xano.io/api:gHPd8le5/transaction/497',
    }).then((response) => {
      actualIdList = response.body.map((result) => result.id);
      expect(actualIdList).to.include.members(idList);
      expect(res.body[497].id).to.be.oneOf(idList)
    })
  })
})
