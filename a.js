const puppeteer = require("puppeteer");

let oPage;
let gBrowser;

puppeteer
  .launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized"],
  })
  .then(function (browser) {
    gBrowser = browser;
    return browser.newPage();
  })
  .then(function (page) {
    oPage = page;
    return page.goto("https://www.google.com/");
  })
  .then(function () {
    return Promise.all([
      oPage.waitForNavigation(),
      oPage.click("[data-pid='2']"),
    ]);
  })
  .then(function () {
    return oPage.type(".gLFyf.gsfi", "dog");
  })
  .then(function () {
    return Promise.all([oPage.waitForNavigation(), oPage.click(".Tg7LZd")]);
  })
  .then(function () {
    return oPage.screenshot({ path: "ss.png" });
  })
  .then(function () {
    return gBrowser.close();
  })
  .catch(function (err) {
    console.log(err);
  });

