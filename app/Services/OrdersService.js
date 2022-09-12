import { appState } from "../AppState.js"
import { Order } from "../Models/Order.js"
import { saveState } from "../Utils/Store.js"

class OrdersService {
  toggleShellfishAllergy(id) {
    let order = appState.orders.find(order => order.id == id)
    if (!order) {
      throw new Error('Bad ID')
    }
    order.shellfishAllergy = !order.shellfishAllergy
    appState.emit('orders')
    saveState('orders', appState.orders)
  }
  createOrder(formData) {
    let order = new Order(formData)
    appState.orders = [order, ...appState.orders]
    console.log(appState.orders);
    saveState('orders', appState.orders)
  }

}

export const ordersService = new OrdersService()