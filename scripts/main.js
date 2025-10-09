import Tabs from './tabs.js'
import cardTabs from './tabsCard.js'

const tabs = new Tabs('.nav', '.main')

document.addEventListener('DOMContentLoaded', () => {
    cardTabs()
})
import JsonParser from './jsonParser.js'

const tabs = new Tabs('.nav', '.main')
const jsonParser = new JsonParser()

jsonParser.getProducts('')
