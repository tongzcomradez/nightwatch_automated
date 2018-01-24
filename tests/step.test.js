module.exports = {
    /* Home Page */
    'step 1st' : (browser) => {
        browser
            .url(browser.launchUrl)
            .waitForElementVisible('body', 1000)
            .click('a[name=auth]')
    },

    /* Login Line */
    'step 2nd': (browser) => {
        browser
            .waitForElementVisible('body', 1000)
            .assert.title("LINE")
            .setValue('input[type=text]', browser.globals.line.email)
            .setValue('input[type=password]', browser.globals.line.password)
            .click('.MdBtn03Login')
    },

    /* Back to Home Page */
    'step 3rd': (browser) => {
        browser
            .waitForElementVisible('body', 1000)
            .assert.title("React App")
            .expect.element('a.link:nth-child(2)').to.be.present
        browser
            .end();
    }
};