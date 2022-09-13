import { appState } from "../AppState.js"
import { Item } from "../Models/Item.js"
import { saveState } from "../Utils/Store.js"

class ItemsService {

  removeItem(id) {
    let leftovers = appState.items.filter(item => item.id !== id)
    appState.items = leftovers
    saveState('items', appState.items)
  }
  createItem(formData) {
    let item = new Item(formData)
    appState.items = [item, ...appState.items]
    console.log(appState.items);
    saveState('items', appState.items)
  }
  toggleShellfishAllergy(id) {
    let item = appState.items.find(item => item.id == id)
    if (!item) {
      throw new Error('Bad ID')
    }
    item.shellfishAllergy = !item.shellfishAllergy
    appState.emit('items')
    saveState('items', appState.items)
  }
}

export const itemsService = new ItemsService()