
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
    await driver.findElement(By.id('draw')).click()
    await driver.sleep(2000)
    const choices = await driver.findElement(By.id('choices'))
    const displayed = await choices.isDisplayed()
    expect(displayed).toBe(true)
    })

test('Bots removed from duo return to choices', async () => {
    await driver.findElement(By.id('draw')).click()
    await driver.sleep(2000)
    await driver.findElement(By.xpath('(//button[text() = "Add to Duo"])[1]')).click()
    await driver.findElement(By.xpath('(//button[text() = "Remove from Duo"])[1]')).isSelected()
    const duel = await driver.findElement(By.id('duel'))
    const selected = await duel.isSelected()
    expect(selected).toBe(false)
    })
})
