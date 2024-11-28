import CITE from "../attributes/cite.js";

/**
 * Defines a short quotation
 *
 */
class Q extends HTML5Element {
  constructor() {
    this.tagName = "q";
  }

  static get elementAttributes() {
    return [CITE];
  }
}
export default Q;
