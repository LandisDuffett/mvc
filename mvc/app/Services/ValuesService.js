import { ProxyState } from "../AppState.js";
import { Value } from "../Models/Value.js";

class ValuesService {
  addValue(o) {
    ProxyState.values = [...ProxyState.values, new Value(o)]
  }
  removeValue(id) {
    const values = ProxyState.values.filter(v => v.id !== id)
    ProxyState.values = values
  }
}

export const valuesService = new ValuesService();

