import Tabs from './tabs.js'
import cardTabs from './tabsCard.js'
import JsonParser from './jsonParser.js'
import statsTabs from './statsCard.js'

const tabs = new Tabs('.nav', '.main')

const jsonParser = new JsonParser()

jsonParser.getProducts('')

 document.addEventListener('DOMContentLoaded', () => {
        statsTabs()
        cardTabs()
        document.querySelector('.stats__card__tabs__button').click();
        document.querySelector('.tabs__card__list__button').click();
        document.querySelector('.nav__list__button').click();
    })

