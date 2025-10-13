import Tabs from './allTabs.js';
import burgerMenu from './burgerMenu.js';
import JsonParser from './jsonParser.js';
import footerMenu from './footerMenu.js';

const tabs = new Tabs('.header__nav', '.main')
const cardTabs = new Tabs('.tabs__card__list', '.tabs__card')
const statsTabs = new Tabs('.stats__card__list', '.stats__card')
const footerTabs = new Tabs('.footer__list__left', '.main')

const jsonParser = new JsonParser()

jsonParser.getProducts('')

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.header__nav .tab__button').click()
    document.querySelector('.tabs__card .tab__button').click()
    document.querySelector('.stats__card .tab__button').click()
})

burgerMenu();
footerMenu();
