import Tabs from './tabs.js'
import JsonParser from './jsonParser.js'

const tabs = new Tabs('.nav', '.main')
const jsonParser = new JsonParser()

jsonParser.getProducts('')
