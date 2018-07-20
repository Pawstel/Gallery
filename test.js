const puppeteer = require('puppeteer');
const pageUrl = 'http://localhost:3000/';

let page;
let browser;
const width = 1280;
const height = 720;

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    args: [`--window-size=${width},${height}`],
  });
  page = await browser.newPage();
  await page.setViewport({ width, height });
});

afterAll(async () => {
  await browser.close();
});

describe('Search function', async () => { // must make this an async function so that "await" may work

beforeEach(async () => {
  await page.goto(pageUrl, {waitUntil: 'networkidle2'});
});

  test('initial title is correct', async () => {
    const div = '#hero h1';
    //const title = page.$eval(div, e => e.value);
    const title = await page.$eval(div, el => el.textContent);
    console.log(title);
    expect(title).toEqual(' Page is rendering with a React Component ');
  });
});