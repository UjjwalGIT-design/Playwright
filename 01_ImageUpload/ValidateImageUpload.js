
const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch({ headless: false })
    const page = await browser.newPage()
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php') // This is Url that I have used
    const imagepath1 = "C:/Users/ujjwa/OneDrive/Desktop/Image1.jpg"; // This is a path of image 1
    const imagepath2 = "C:/Users/ujjwa/OneDrive/Desktop/Image2.jpg"; //This is a path of image 2
    await page.setInputFiles('//input[@id="filesToUpload"]', [imagepath1, imagepath2]); //This is to select multiple files at one time to upload
    browser.close(); //comment this if you want to see image upload before closing the browser
})()
