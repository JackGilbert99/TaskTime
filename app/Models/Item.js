import { generateId } from "../Utils/generateId.js";

export class Item {
  constructor(data) {
    this.id = data.id || generateId()
    this.orderId = data.orderId
    this.name = data.name
    this.price = parseInt(data.price)
    this.shellfishAllergy = data.shellfishAllergy || false


  }


  // NOTE for handling deletes.. we need to supply a unique identifier..take a look at your arguments for the delete function here
  get Template() {
    return `
    <li class="d-flex justify-content-between list-group-item">
      <span>${this.name}</span>
      <span>$${this.price} <i onclick="app.itemsController.removeItem('${this.id}')" class="mdi mdi-close text-danger selectable rounded"  title="Remove Item"></i></span>
     <input onchange="app.itemsController.toggleShellfishAllergy('${this.id}')" class="ms-2" type="checkbox" ${this.shellfishAllergy ? 'checked' : ''}>
     
    </li>
    `
  }
}