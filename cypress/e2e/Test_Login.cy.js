describe('template spec', () => {
  it('Login Success', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')   
    cy.get('.radius').click()

    cy.get('#flash').should('be.visible')

  })
  it('Login Failed', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('#username').type('usernamesalah')
    cy.get('#password').type('passwordsalah!')   
    cy.get('.radius').click()

    cy.get('#flash').should('be.visible')

  })
})