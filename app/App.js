import { ItemsController } from "./Controllers/ItemsController.js";
import { OrdersController } from "./Controllers/OrdersController.js";

class App {
  ordersController = new OrdersController()
  itemsController = new ItemsController()
}

window["app"] = new App();
