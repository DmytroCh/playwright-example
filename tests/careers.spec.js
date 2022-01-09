const { test, expect } = require('@playwright/test');
const { CareersPage } = require('./pageobjects/careers.page');


test.describe('Execute tests on Careers page', () => {
    test('Should be offers on the careers page', async ({page}) => {
        const careers = new CareersPage(page)
        await careers.open()
        await expect(careers.page).toHaveURL('/careers/')

        //const offers = page.locator('.job-offers__wrapper .job-offer__title')
        const offersCount = await careers.getOffersCount()
        expect(offersCount >= 1).toBeTruthy()
    });

    test('Should work department filter', async ({page}) => {
        const careers = new CareersPage(page)
        await careers.open()
        await expect(careers.page).toHaveURL('/careers/')

        const expectedOffers = await careers.getExpectedOffers(careers.DEPARTMENTS.QA) //get List of specific offers
        const expectedCount = await expectedOffers.count()
        await careers.selectDepartment(careers.DEPARTMENTS.QA)
        const filteredOffers = await careers.getOffers() //get List of all offers
        const filteredCount = await filteredOffers.count()
        expect(expectedCount == filteredCount).toBeTruthy()
    });
})
