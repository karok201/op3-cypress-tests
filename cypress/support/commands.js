// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add('login', (email, password) => {
    cy.visit('https://itdelta.learn.company-policy.com/login', { timeout: 10000 });

    cy.xpath("//input[@id='email']", { timeout: 10000 }).type(email);
    cy.xpath("//input[@id='password']", { timeout: 10000 }).type(password);

    cy.xpath("//button[@type='submit']", { timeout: 10000}).click();

    cy.xpath("//h2[text()='Learning center']").should('be.visible');
});

Cypress.Commands.add('admin', (email, password) => {
    cy.login(email, password);

    cy.xpath("(//button[@class='max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'])[1]").click();
    cy.xpath("//a[@href='https://itdelta.learn.company-policy.com/admin']").click();
});

//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
