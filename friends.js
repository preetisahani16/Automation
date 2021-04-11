const pup = require("puppeteer");
let browserPromise = pup.launch({
    headless: false,
    defaultViewport: false,
    args: ["--start-maximized"]
});
let tab;
let brow;
let frnds = ["Monica Geller", "Chandler Bing", "Joey Tribbiani", "Phoebe Buffay", "Rachel Green", "Ross Geller"];
browserPromise.then(function (browser) {
    brow = browser;
    let pagesPromise = browser.pages();
    return pagesPromise;
}).then(function (pages) {
    tab = pages[0];
    let pageOpenPromise = tab.goto("https://www.google.com/");
    return pageOpenPromise;
}).then(function () {
    let search = tab.type(".gLFyf.gsfi", frnds[0]);
    return search;

}).then(function () {
    let enter = tab.keyboard.press("Enter");
    return enter;
}).then(function () {
    let waitForImage = tab.waitForSelector(".ZHyHcb.uTqStd.JlrwAf", { visible: true });
    return waitForImage;
}).then(function () {

    let imageClick = tab.click(".ZHyHcb.uTqStd.JlrwAf");
    return imageClick;

}).then(function () {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve();
        }, 6000);
    })
}).then(function () {
    let click = tab.click(".gLFyf.gsfi");
    return click;
}).then(function () {
    let controlDownPromise = tab.keyboard.down("Control");
    return controlDownPromise;
}).then(function () {
    let aPressPromise = tab.keyboard.press("A");
    return aPressPromise;
}).then(function () {
    let xPressPromise = tab.keyboard.press("X");
    return xPressPromise;
}).then(function () {
    let controlUpPromise = tab.keyboard.up("Control");
    return controlUpPromise;
}).then(function () {
    let search = tab.type(".gLFyf.gsfi", frnds[1]);
    return search;
}).then(function () {
    let enter = tab.keyboard.press("Enter");
    return enter;
}).then(function () {
    let waitForImage = tab.waitForSelector(".ZHyHcb.uTqStd.JlrwAf", { visible: true });
    return waitForImage;
}).then(function () {

    let imageClick = tab.click(".ZHyHcb.uTqStd.JlrwAf");
    return imageClick;
}).then(function () {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve();
        }, 8000);
    })
}).then(function () {
    let click = tab.click(".gLFyf.gsfi");
    return click;
}).then(function () {
    let controlDownPromise = tab.keyboard.down("Control");
    return controlDownPromise;
}).then(function () {
    let aPressPromise = tab.keyboard.press("A");
    return aPressPromise;
}).then(function () {
    let xPressPromise = tab.keyboard.press("X");
    return xPressPromise;
}).then(function () {
    let controlUpPromise = tab.keyboard.up("Control");
    return controlUpPromise;
}).then(function () {
    let search = tab.type(".gLFyf.gsfi", frnds[2]);
    return search;

}).then(function () {
    let enter = tab.keyboard.press("Enter");
    return enter;
}).then(function () {
    let waitForImage = tab.waitForSelector(".ZHyHcb.uTqStd.JlrwAf", { visible: true });
    return waitForImage;
}).then(function () {

    let imageClick = tab.click(".ZHyHcb.uTqStd.JlrwAf");
    return imageClick;

}).then(function () {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve();
        }, 4000);
    })
}).then(function () {
    let click = tab.click(".gLFyf.gsfi");
    return click;
}).then(function () {
    let controlDownPromise = tab.keyboard.down("Control");
    return controlDownPromise;
}).then(function () {
    let aPressPromise = tab.keyboard.press("A");
    return aPressPromise;
}).then(function () {
    let xPressPromise = tab.keyboard.press("X");
    return xPressPromise;
}).then(function () {
    let controlUpPromise = tab.keyboard.up("Control");
    return controlUpPromise;
}).then(function () {
    let search = tab.type(".gLFyf.gsfi", frnds[3]);
    return search;

}).then(function () {
    let enter = tab.keyboard.press("Enter");
    return enter;
}).then(function () {
    let waitForImage = tab.waitForSelector(".ZHyHcb.uTqStd.JlrwAf", { visible: true });
    return waitForImage;
}).then(function () {

    let imageClick = tab.click(".ZHyHcb.uTqStd.JlrwAf");
    return imageClick;

}).then(function () {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve();
        }, 16000);
    })

}).then(function () {
    let click = tab.click(".gLFyf.gsfi");
    return click;
}).then(function () {
    let controlDownPromise = tab.keyboard.down("Control");
    return controlDownPromise;
}).then(function () {
    let aPressPromise = tab.keyboard.press("A");
    return aPressPromise;
}).then(function () {
    let xPressPromise = tab.keyboard.press("X");
    return xPressPromise;
}).then(function () {
    let controlUpPromise = tab.keyboard.up("Control");
    return controlUpPromise;
}).then(function () {
    let search = tab.type(".gLFyf.gsfi", frnds[5]);
    return search;

}).then(function () {
    let enter = tab.keyboard.press("Enter");
    return enter;
}).then(function () {
    let waitForImage = tab.waitForSelector(".ZHyHcb.uTqStd.JlrwAf", { visible: true });
    return waitForImage;
}).then(function () {
    let imageClick;
    imageClick = tab.click(".ZHyHcb.uTqStd.JlrwAf");
    return imageClick;
}).then(function () {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve();
        }, 2000);
    })
}).then(function () {
    let imageClick;
    imageClick = tab.click(".ZHyHcb.uTqStd.JlrwAf");
    return imageClick;
}).then(function () {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve();
        }, 2000);
    })
}).then(function () {
    let imageClick;
    imageClick = tab.click(".ZHyHcb.uTqStd.JlrwAf");
    return imageClick;
}).then(function () {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve();
        }, 2000);
    })
}).then(function () {
    let imageClick;
    imageClick = tab.click(".ZHyHcb.uTqStd.JlrwAf");
    return imageClick;
}).then(function () {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve();
        }, 4000);
    })
}).then(function () {
    let click = tab.click(".gLFyf.gsfi");
    return click;
}).then(function () {
    let controlDownPromise = tab.keyboard.down("Control");
    return controlDownPromise;
}).then(function () {
    let aPressPromise = tab.keyboard.press("A");
    return aPressPromise;
}).then(function () {
    let xPressPromise = tab.keyboard.press("X");
    return xPressPromise;
}).then(function () {
    let controlUpPromise = tab.keyboard.up("Control");
    return controlUpPromise;

}).then(function () {
    let search = tab.type(".gLFyf.gsfi", frnds[4]);
    return search;

}).then(function () {
    let enter = tab.keyboard.press("Enter");
    return enter;
}).then(function () {
    let waitForImage = tab.waitForSelector(".ZHyHcb.uTqStd.JlrwAf", { visible: true });
    return waitForImage;
}).then(function () {

    let imageClick = tab.click(".ZHyHcb.uTqStd.JlrwAf");
    return imageClick;

}).then(function () {
    let wait = tab.waitForNavigation({ waitUntil: "networkidle0" });
    return wait;
}).then(function () {
    brow.close();
});