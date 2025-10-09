import Tabs from './tabs.js'
import cardTabs from './tabsCard.js'
import JsonParser from './jsonParser.js'

const tabs = new Tabs('.nav', '.main')

document.addEventListener('DOMContentLoaded', () => {
    cardTabs();
    tabs();
})



const jsonParser = new JsonParser()

jsonParser.getProducts('')
