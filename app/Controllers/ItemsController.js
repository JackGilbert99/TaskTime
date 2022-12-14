import { itemsService } from "../Services/ItemsService.js";
import { getFormData } from "../Utils/FormHandler.js";


export class ItemsController {

  constructor() {
  }

  createItem(orderId) {
    try {
      window.event.preventDefault()
      let form = window.event.target
      let formData = getFormData(form)
      formData.orderId = orderId
      console.log(formData);
      itemsService.createItem(formData)
      form.reset()
    } catch (error) {
      console.error('[CREATE_ITEM]', error);
    }
  }

  // NOTE this is the function we are calling when trying to delete an item... notice the parameters
  removeItem(id) {
    if (window.confirm('Do you want to remove this item?')) {
      itemsService.removeItem(id)
    }
  }
  toggleShellfishAllergy(id) {
    itemsService.toggleShellfishAllergy(id)
  }
}