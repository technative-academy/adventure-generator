import Tabs from './tabs.js'
import cardTabs from './tabsCard.js'

const tabs = new Tabs('.nav', '.main')

document.addEventListener('DOMContentLoaded', () => {
    cardTabs()
})
