import puppeteer from "puppeteer"

// async function main() {
//   const browser = await puppeteer.launch({ headless: false })
//   const page = await browser.newPage()
//   await page.goto("https://www.facebook.com")
// }
// main()

class Browser {
  constructor(public url: string) {
    this.openBrowser(url)
  }
  async openBrowser(url: string) {
    const browser = await puppeteer.launch({ headless: false })
    const page = await browser.newPage()
    await page.goto(url, {
      timeout: 0,
      waitUntil: "networkidle2",
    })
    await page.waitForSelector("#text-input-what")
    await page.type("#text-input-what", "React Developer")
    await page.waitForSelector("#text-input-where")
    await page.type("#text-input-where", "Canada")
    // const button = await page.(document.querySelector("button.yosegi-InlineWhatWhere-primaryButton")! as HTMLButtonElement)
    await page.waitForSelector(".yosegi-InlineWhatWhere-primaryButton")
    await page.click(".yosegi-InlineWhatWhere-primaryButton")
  }
}
//text-input-what
//text-input-where
const browser = new Browser("https://www.indeed.com/")
