/// <reference types="cypress" />
describe('Smoke Test', () => {

    describe('Al entrar a la pantalla principal', () => {
        beforeEach(() => {
            cy.visit('/')
        })
        it('Se muestra el titulo de la app', () => {
            cy.get('h1[data-cy=login-title]').should('exist')
        })
    })
})



