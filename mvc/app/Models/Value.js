import { generateId } from "../Utils/generateId.js"

export class Value {
  constructor(data) {
    this.id = generateId()
    this.title = data.title
    this.author = data.author
    this.description = data.description
  }

  get CardTemplate() {
    return /*html*/`
      <div class="card m-2 shadow">
        <div class="card-body">
          <h4 class="no-select">
            Title: ${this.title}
          </h4>
          <h4 class="no-select">
            Author: ${this.author}
          </h4>
          <h4 class="no-select">
            Description: ${this.description}
          </h4>
        </div>
        <button class="btn btn-danger square-top" onclick="app.valuesController.removeValue('${this.id}')">Remove</button>
      </div>
    `
  }
}
