describe('Authenticated student test', () => {
    const email = 'project2@it-delta.ru';
    const password = '159159';

    beforeEach(() => {
        cy.login(email, password);
    });

    it('should open and close lists', function () {
        cy.xpath("(//button[@class='flex justify-between items-center w-full p-4 font-medium text-left text-white bg-indigo-500 rounded-lg hover:bg-indigo-300 hover:text-gray-900  focus:outline-none focus-visible:ring focus-visible:ring-indigo'])[1]")
            .click();

        cy.xpath("(//button[@class='flex justify-between items-center w-full p-4 font-medium text-left text-white bg-indigo-500 rounded-lg hover:bg-indigo-300 hover:text-gray-900  focus:outline-none focus-visible:ring focus-visible:ring-indigo'])[2]")
            .click();

        cy.xpath("(//button[@class='flex justify-between items-center w-full p-4 font-medium text-left text-white bg-indigo-500 rounded-lg hover:bg-indigo-300 hover:text-gray-900  focus:outline-none focus-visible:ring focus-visible:ring-indigo'])[3]")
            .click();

        cy.xpath("(//button[@class='flex justify-between items-center w-full p-4 font-medium text-left text-white bg-indigo-500 rounded-lg hover:bg-indigo-300 hover:text-gray-900  focus:outline-none focus-visible:ring focus-visible:ring-indigo'])[1]")
        .click();

        cy.xpath("(//button[@class='flex justify-between items-center w-full p-4 font-medium text-left text-white bg-indigo-500 rounded-lg hover:bg-indigo-300 hover:text-gray-900  focus:outline-none focus-visible:ring focus-visible:ring-indigo'])[2]")
        .click();

        cy.xpath("(//button[@class='flex justify-between items-center w-full p-4 font-medium text-left text-white bg-indigo-500 rounded-lg hover:bg-indigo-300 hover:text-gray-900  focus:outline-none focus-visible:ring focus-visible:ring-indigo'])[3]")
        .click();
    });

    it('should select Started Finished and All courses', function () {
        cy.xpath("//button[text()='Started']").click()
        cy.xpath("//button[text()='Finished']").click()
        cy.xpath("//button[text()='All']").click()
    });

    it('should search course by name', function () {
        cy.xpath("//input[@id='search']").type('Планирование').clear();
        cy.xpath("//input[@id='search']").type('Тестовое задание').clear();
        cy.xpath("//input[@id='search']").type('Дизайн').clear();
    });

    it('should scroll page, open course and travel him', function () {
        cy.xpath("//h3[text()='Linux']")
            .click();

        cy.xpath("//p[text()='Переменная PATH в Linux']", { timeout: 10000})
            .click();

        cy.xpath("//h1[text()]", { timeout: 5000}).should('be.visible')

        cy.xpath("//p[text()='Переменные окружения в Linux']", { timeout: 10000 })
        .click();

        cy.xpath("//h1[text()='Переменные окружения в Linux']", { timeout: 10000 }).should('be.visible')
    });

    it('should go to curriculums', function () {
        cy.xpath("//a[@name='Curriculums']").click();
        cy.xpath("//h3[text()='Архитектура']").should('be.visible').click();
        cy.xpath("//h1[text()='Архитектура']").should('be.visible');
    });

    it('should change language', function () {
        cy.xpath("//button[@class='h-8 w-8 max-w-xs bg-white flex items-center border-2 border-gray-300 justify-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 z-50']")
            .click();

        cy.xpath("//a[text()='ru']").click()

        cy.xpath("//h2[text()='Учебный центр']").should('be.visible');
    });
})
