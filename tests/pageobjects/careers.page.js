const { expect } = require('@playwright/test');

exports.CareersPage = class CareersPage {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.careersBtn = page.locator('.nav-link-container :text("Careers")').locator('visible=true')
        this.offers = page.locator('.job-offers__wrapper .job-offer__title')
    }

    DEPARTMENTS = {
        QA: "QA",
        ALL: "All departments"
    }

    async open() {
        await this.page.goto('/')
        await this.careersBtn.click()
    }

    async getOffersCount() {
        //wait for offers be presented on the page
        await this.offers.waitFor({strict: false}) // by default strict mode=true, it make sure selector have only one object
        const count = await this.offers.count()
        return count
    }

    async getOffers() {
        //wait for offers be presented on the page
        await this.offers.waitFor({strict: false}) // by default strict mode=true, it make sure selector have only one object
        return this.offers
    }

    async getExpectedOffers(department) {
        //wait for offers be presented on the page
        await this.offers.waitFor({strict: false}) // by default strict mode=true, it make sure selector have only one object
        return this.offers.locator(`text=${department}`)
    }

    async selectDepartment(department){
        await this.page.locator('button.select--desktop').locator(`text=${this.DEPARTMENTS.ALL}`).click()
        await this.page.locator('.job-offers__search-row').locator('li').locator(`text="${department}"`).click()
    }

}
