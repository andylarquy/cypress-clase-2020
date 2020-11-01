/// <reference types="cypress" />
describe('Login Page Suite', () => {
    
    beforeEach(() => {
        cy.visit('/')
    })

    describe('Al entrar a la pantalla principal', () => {

        it('Se muestra el titulo de la app', () => {
            getTestElement('login-title').should('exist')
        })

        it('Arroja un error si se intenta loguear sin ingresar ni username ni password', () => {
            getTestElement('ingresar').click()

            cy.contains('[data-cy="login-error-message"]', 'Debe ingresar un usuario!')
        })

        it('Arroja un error si se intenta loguear solo con una password', () => {
            getTestElement('password').type('123')
            getTestElement('ingresar').click()

            cy.contains('[data-cy="login-error-message"]', 'Debe ingresar un usuario!')
        })

        it('Arroja un error si se intenta loguear solo con un username', () => {
            getTestElement('username').type('usr1')
            getTestElement('ingresar').click()

            cy.contains('[data-cy="login-error-message"]', 'Debe ingresar una contraseña!')
        })

        it('Arroja un error si se intenta loguear con credenciales invalidas', () => {
            getTestElement('username').type('usuarioInvalido')
            getTestElement('password').type('passwordInvalida')
            getTestElement('ingresar').click()

            cy.contains('[data-cy="login-error-message"]', 'Usuario o password incorrecta!')
        })

        describe('Si se ingresan credenciales validas', () => {

            it('El sistema permite loguearse', () => {
                getTestElement('username').type('usr1')
                getTestElement('password').type('123')
                getTestElement('ingresar').click()

                cy.location('pathname').should('eq', '/busqueda-recetas')
            })

            it('El sistema permite recordar el username ingresado al salir', () => {
                getTestElement('username').type('usr1')
                getTestElement('password').type('123')
                getTestElement('login-remeber-checkbox').click()
                getTestElement('ingresar').click()
                cy.visit('/')

                getTestElement('username').should('contain.value', 'usr1')
            })
        })
    })
})

function getTestElement(element) {
    return cy.get(`[data-testid="${element}"]`)
}
