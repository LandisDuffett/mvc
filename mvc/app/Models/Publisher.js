import { generateId } from "../Utils/generateId.js"

export class Publisher {
  constructor(data) {
    this.id = generateId()
    this.name = data.name
    this.city = data.city
  }

  get CardTemplate() {
    return /*html*/`
      <div class="card m-2 shadow">
        <div class="card-body">
          <h4 class="no-select">
            Publisher: ${this.name}
          </h4>
          <h4 class="no-select">
            City: ${this.city}
          </h4>
        </div>
        <button class="btn btn-danger square-top" onclick="app.publishersController.removeValue('${this.id}')">Remove</button>
      </div>
    `
  }
}
