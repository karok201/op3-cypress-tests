describe("A. Categories List", () => {

    before(() => {
      cy.login();
    });

    beforeEach(() => {
        Cypress.Cookies.preserveOnce('company_policy_session');
    });

    it('should create Category)', function () {
        cy.visit('admin/cp/category');
        cy.contains('Categories').click();
        cy.contains('addCategory').click();

        // create post
        cy.get('ul li:first input').type('Test1');
        cy.xpath("//button[@role='switch']").click();
        // cy.xpath("//button[text()='Save']").should('be.visible').click();
        // cy.xpath("//p[text()='Success!']").should('be.visible');

        // check active 
        // cy.get('table tr th').contains('Test1').should('have.value', 'Inactive');
        //// Edit lesson ////
        // Getting access to lesson
        // cy.accessAllItems();
        // cy.xpath("(//div[text()='" + Cypress.env('lessonCheckboxRadio') + "'])[1]").click();

        // // Create radio question
        // cy.question(Cypress.env('questionRadio'), 2);
        // cy.addAnswers(1);

        // // Create checkbox question
        // cy.question(Cypress.env('questionCheckbox'), 3);
        // cy.addAnswers(2);

        // // Assert question added
        // cy.xpath("//span[text()='Active']").should('be.visible');
    });

    it('should delete Category)', function () {
      
        cy.visit('admin/cp/category');

        cy.accessAllItems();
        cy.contains('Test1');
    });

    // it('should create lesson(text)', function () {
    //     cy.admin();

    //     //// Create lesson ////
    //     cy.xpath("//a[text()='Lessons']").click()
    //     cy.xpath("//button[text()='Add lesson']").click();

    //     cy.xpath("//input[@type='text']").type(Cypress.env('lessonText'));
    //     cy.xpath("//button[@role='switch']").click();
    //     cy.xpath("//button[text()='Save']").should('be.visible').click();
    //     cy.xpath("//p[text()='Success!']").should('be.visible');

    //     //// Edit lesson ////
    //     // Getting access to lesson
    //     cy.accessAllItems();
    //     cy.xpath("(//div[text()='" + Cypress.env('lessonText') + "'])[1]").click();

    //     // Create text question
    //     cy.question(Cypress.env('questionText'), 1);

    //     // Assert question added
    //     cy.xpath("//span[text()='Active']").should('be.visible');
    // });

    afterEach(function onAfterEach() {
    });

    after(() => {
        cy.clearCookies();
    });
  
});
