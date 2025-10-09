import Tabs from './tabs.js'
import cardTabs from './tabsCard.js'
import JsonParser from './jsonParser.js'
import statsTabs from './statsCard.js'

const tabs = new Tabs('.nav', '.main')

document.addEventListener('DOMContentLoaded', () => {
    cardTabs();
    statsTabs();
})



const jsonParser = new JsonParser()

jsonParser.getProducts('')
