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
  }
}
//text-input-what
//text-input-where
const browser = new Browser("https://www.indeed.com/")
