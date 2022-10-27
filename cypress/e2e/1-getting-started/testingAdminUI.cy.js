describe('Authenticated admin test', () => {
    const email = 'project2@it-delta.ru';
    const password = '159159';

    beforeEach(() => {
        cy.admin(email, password);
    });

    it('should create', function () {
        cy.xpath("//a[text()='Lessons']").click()
        cy.xpath("//button[text()='Add lesson']", { timeout: 10000 }).click();

        cy.xpath("//input[@type='text']").type("QA Test lesson");
        cy.xpath("//button[text()='Save']").should('be.visible').click();
        cy.xpath("//p[text()='Success!']", { timeout: 10000 }).should('be.visible');
    });

    it('should edit created lesson and add question for him', function () {
        cy.xpath("//a[text()='Lesson']").click();

        cy.xpath("//button[text()='3']").click();
        cy.wait(1500);
        cy.xpath("(//div[text()='QA Test lesson'])[1]").click();

        cy.xpath("//h2[text()='Edit lesson']").click();
        cy.xpath("//div[@class='flex items-center cursor-pointer mb-3']").click();

        cy.wait(1500)
        cy.xpath("(//input[@type='text'])[1]").type("QA Test Question"); // Type question name
        cy.xpath("(//input[@type='text'])[2]").type("This is the QA Test Question"); // Type question description
        cy.xpath("//button[@role='switch']").click(); // Set question is active
        cy.xpath("(//div[@role='radio'])[1]") // Change type of question (Set text)
        cy.xpath("//input[@type='number']").type(10) // Set scores for question
        cy.xpath("//button[text()='Save']").click() // Save question

        cy.xpath("//p[text()='Success!']", { timeout: 10000 }).should('be.visible');
        cy.xpath("//span[text()='Active']").should('be.visible'); // Assert question added
    });

    it('should invite user to app', function () {
        cy.xpath("(//button[@class='max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'])[1]").click();
        cy.xpath("//a[@href='https://itdelta.learn.company-policy.com/invite-user']").click();
        cy.xpath("//*[@id='email']").type("testinvite@qatest.qa");

        cy.xpath("//button[text()='Select groups']").click();
        cy.xpath("//li[text()='Кандидаты Frontend']").click();
        cy.xpath("//button[text()='Save']").click();
        cy.xpath("//li//button").should('be.visible');
        cy.xpath("//button[@type='submit']").click();

        cy.xpath("//p[text()='Success!']", { timeout: 10000 }).should('be.visible');
    });

    it('should assert profile page', function () {
        cy.xpath("(//button[@class='max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'])[1]").click();
        cy.xpath("//a[@href='https://itdelta.learn.company-policy.com/profile']").click();

        cy.xpath("//h1[text()='User Profile']").should('be.visible');
        cy.xpath("//input[@id='new_password']").clear().type(password);
        cy.xpath("//button[@type='submit']").should('be.disabled');
        cy.xpath("//input[@id='password']").clear().type(password);
        cy.xpath("//button[@type='submit']").should('not.be.disabled');
    });

    it('should logout', function () {
        cy.xpath("(//button[@class='max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'])[1]").click();
        cy.xpath("//a[@href='https://itdelta.learn.company-policy.com/logout']").click();

        cy.xpath("//span[@class='block text-white']").should('be.visible');
    });
});
