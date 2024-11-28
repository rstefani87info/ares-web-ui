/**
     * Isolates a part of text that might be formatted in a different direction 
from other text outside it
     * 
    */
class BDI extends HTML5Element {
  constructor() {
    this.tagName = "bdi";
  }

  static get elementAttributes() {
    return [];
  }
}
export default BDI;
