class HomePage {

    acessoHome(title) {
        cy.visit("/")
        cy.title()
            .should('equal', `${title}`)
        cy.contains('h1', 'Metodologia que aprova')
            .should('be.visible')
    }

    menuCursos(cursos) {
        cy.contains('li', 'Cursos')
            .click()
            .wait(4000)
            cy.get('[href="https://cbc.grupomedcof.com.br/preparatorio/"]')
            .click()
    }
}
export default new HomePage()
