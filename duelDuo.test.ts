
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

describe('all duo tests' , () => {
test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
    })

test('Draw button displays bot choices', async () => {
    const choices = await driver.findElement(By.id('choices'))
    const displayed = await choices.isDisplayed()
    expect(displayed).toBe(true)
    await driver.findElement(By.id('draw')).click()
    await driver.sleep(2000)
    })

test('Bots removed from duo return to choices', async () => {
    const duel = await driver.findElement(By.id('duel'))
    const displayed = await duel.isDisplayed()
    expect(displayed).toBe(true)
    await driver.findElement(By.id('duel')).click()
    await driver.sleep(2000)
    })
})
