import { ProxyState } from "../AppState.js";
import { Publisher } from "../Models/Publisher.js";

class PublishersService {
  addPub(o) {
    ProxyState.publishers = [...ProxyState.pubilshers, new Publisher(o)]
  }
  removePub(id) {
    const publishers = ProxyState.publishers.filter(v => v.id !== id)
    ProxyState.publishers = publishers
  }
}

export const publishersService = new PublishersService();

