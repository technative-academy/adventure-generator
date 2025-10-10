import Tabs from './allTabs.js'
//import cardTabs from './tabsCard.js'
import JsonParser from './jsonParser.js'
//import statsTabs from './statsCard.js'

const tabs = new Tabs('.nav', '.main')
const cardTabs = new Tabs('.tabs__card__list', '.tabs__card')
const statsTabs = new Tabs('.stats__card__list', '.stats__card')

const jsonParser = new JsonParser()

jsonParser.getProducts('')

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.nav .tab__button').click()
})

