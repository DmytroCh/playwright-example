// @ts-check

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
    use: {
        baseURL: "https://10clouds.com",
        headless: false,
        viewport: { width: 1280, height: 720 },
        ignoreHTTPSErrors: false,
        video: 'off',
    },
};

module.exports = config;