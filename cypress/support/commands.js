Cypress.Commands.add('login', () => {
    cy.visit(Cypress.config('baseUrl') + 'login', { timeout: 1000 });
    cy.setCookie('lang', 'en')

    cy.xpath("//input[@id='email']", { timeout: 10000 }).type(Cypress.env('email'), { log: false });
    cy.xpath("//input[@id='password']", { timeout: 10000 }).type(Cypress.env('password'), { log: false });

    cy.xpath("//button[@type='submit']", { timeout: 10000}).click();

    // cy.xpath("//h2[text()='Learning center']").click();
});

Cypress.Commands.add('admin', () => {
    cy.login();

    cy.xpath("(//button[@class='max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'])[1]").click();
    cy.xpath("//a[@href='" +Cypress.config('baseUrl') + "admin']").click();
    // cy.wait(1500);
});

Cypress.Commands.add('question', (questionName, questionType) => {
    cy.wait(1500);
    cy.xpath("//h2[text()='Edit lesson']").click();
    cy.xpath("//div[@class='flex items-center cursor-pointer mb-3']").click();
    cy.wait(2500);
    // cy.xpath("//*[text()=Создание вопроса']").should('be.visible');
    cy.xpath("(//input[@type='text'])[1]").type(questionName);
    cy.xpath("(//input[@type='text'])[2]").type(questionName + questionType);
    cy.xpath("//button[@role='switch']").click();
    cy.xpath("(//div[@role='radio'])[" + questionType + "]").click({force:true});
    cy.xpath("//input[@type='number']").type(10);
    cy.xpath("//button[text()='Save']").click();
});

Cypress.Commands.add('addAnswers', (answer) => {
    // if (Cypress.config().baseUrl === 'https://tenant1.release.company-policy.com/') {
        cy.xpath("(//*[@class='w-5 h-5 mx-1 text-indigo-600 hover:text-indigo-900 cursor-pointer'])[" + answer + "]").click();
        cy.xpath("//*[text()='Edit question']");
    // } else {
    //     cy.xpath("(//*[@class='w-5 h-5 mx-1 text-indigo-600 hover:text-indigo-900 cursor-pointer'])[" + answer + "]").click();
    //     cy.xpath("//*[text()='Редактирование вопроса']");
    // }

    cy.xpath("//*[@class='w-6 h-6 mb-1 text-blue-600 hover:text-blue-900 cursor-pointer']").click();
    cy.xpath("//*[text()='Create answer']").should('be.visible');
    cy.xpath("//input[@type='text']").type(Cypress.env('answer1'));
    cy.xpath("(//button[@role='switch'])[1]").click();
    cy.xpath("(//button[@role='switch'])[2]").click();
    cy.xpath("//button[text()='Save']").click();

    cy.xpath("//*[@class='w-6 h-6 mb-1 text-blue-600 hover:text-blue-900 cursor-pointer']").click();
    cy.xpath("//*[text()='Create answer']").should('be.visible');
    cy.xpath("//input[@type='text']").type(Cypress.env('answer2'));
    cy.xpath("(//button[@role='switch'])[1]").click();
    cy.xpath("//button[text()='Save']").click();

    cy.wait(1500);
    cy.xpath("//button[text()='Cancel']").click();
    cy.xpath("//*[text()='Edit lesson']");
});

Cypress.Commands.add('accessAllItems', () => {
    cy.wait(2000);
    cy.contains('Show 10 elements').click();
    // cy.xpath("(//button[@class='relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-pointer focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 text-sm'])[last()]")
    // .click();
    // cy.wait(2000);
    cy.xpath("(//li)[last()]").click();
});

Cypress.Commands.add('logout', () => {
    cy.visit('\logout', { timeout: 1000 });
    // cy.wait(1500);
    // cy.xpath("//button[@class='max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 z-50']").click();
    // cy.xpath("//a[@href='" +Cypress.config('baseUrl') + "logout']").click();
    // cy.wait(1500);
});

Cypress.Commands.add('skipTests', (cookieName) => {
    if ( Cypress.browser.isHeaded ) {
        cy.clearCookie(cookieName)
    } else {
        cy.getCookie(cookieName).then(cookie => {
            if (
                cookie &&
                typeof cookie === 'object' &&
                cookie.value === 'true'
            ) {
                Cypress.runner.stop();
            }
        });
    }
});