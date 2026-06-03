import { Before, After, AfterStep, Status } from "@cucumber/cucumber";
import { POManager } from "../../pageobjects_ts/POManager"
import { Browser, BrowserContext, chromium} from "@playwright/test";

Before(async function() {
    const browser: Browser = await chromium.launch({headless : false});
        const context: BrowserContext = await browser.newContext();
        this.page = await context.newPage();
        this.poManager = new POManager(this.page);
        this.loginPage = this.poManager.getLogin();
})

AfterStep(async function({result}) {
    if(result.status === Status.FAILED) {
        await this.page.screenshot({path : 'screenshot.png'});
    }
})

After(async function() {
    console.log('The last to be executed');
}) 