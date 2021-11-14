import { ValuesController } from "./Controllers/ValuesController.js";
import { PublishersController } from "./Controllers/PublishersController.js";

class App {
  valuesController = new ValuesController();
  publishersController = new PublishersController();
}

window["app"] = new App();
