import CITE from "../attributes/cite.js";
import DATETIME from "../attributes/datetime.js";

/**
 * Defines a text that has been inserted into a document
 *
 */
class INS extends HTML5Element {
  constructor() {
    this.tagName = "ins";
  }

  static get elementAttributes() {
    return [CITE, DATETIME];
  }
}
export default INS;
