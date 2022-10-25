describe('Login', () => {
    const email = 'project2@it-delta.ru';
    const password = '159159';

    beforeEach(() => {
        cy.visit('https://itdelta.learn.company-policy.com/');
    });

    it('should show landing page', function () {
        cy.xpath("//span[@class='block text-white']").should('be.visible');
    });

    it('should move to login page and log in', function () {
        cy.xpath("//a[@class='whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900']").click();

        cy.xpath("//input[@id='email']", { timeout: 10000 }).type(email);
        cy.xpath("//input[@id='password']", { timeout: 10000 }).type(password);

        cy.xpath("//button[@type='submit']", { timeout: 10000}).click();

        cy.xpath("//h2[text()='Learning center']").should('be.visible');
    });
})

// https://itdelta.learn.company-policy.com/
