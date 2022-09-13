import { appState } from "../AppState.js";
import { ordersService } from "../Services/OrdersService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { setHTML } from "../Utils/Writer.js";

function _drawOrders() {
  let template = ''
  appState.orders.forEach(order => template += order.Template)
  setHTML('orders', template)
}

export class OrdersController {
  constructor() {
    appState.on('orders', _drawOrders)
    appState.on('items', _drawOrders)
    _drawOrders()
  }
  createOrder() {
    try {

      window.event.preventDefault()

      const form = window.event.target
      let formData = getFormData(form)

      ordersService.createOrder(formData)

      form.reset()
    } catch (error) {
      console.error('[CREATE_ORDER]', error);
    }
  }

  toggleShellfishAllergy(id) {
    ordersService.toggleShellfishAllergy(id)
  }
  removeOrder(id) {
    if (window.confirm('Do you want to remove this item?')) {
      ordersService.removeOrder(id)
    }
  }
}
