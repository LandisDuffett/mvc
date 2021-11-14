import { ProxyState } from "../AppState.js";
import { publishersService } from "../Services/PublishersService.js";


//Private
function _draw() {
  let publishers = ProxyState.publishers;
  let cardsTemplate = ''
  publishers.forEach(v => cardsTemplate += v.CardTemplate)
  document.getElementById('app2').innerHTML = /*html*/`
  <div class='my-3'>
    <div class="values d-flex flex-wrap my-3">
      ${cardsTemplate}
    </div>
  </div>
  `
}

//Public
export class PublishersController {
  constructor() {
    ProxyState.on("publishers", _draw);
    _draw()
  }

  addPub(o) {
    //o.preventDefault()
    debugger
    publishersService.addPub(o)
  }

  removeValue(id) {
    publishersService.removePub(id)
  }

}
