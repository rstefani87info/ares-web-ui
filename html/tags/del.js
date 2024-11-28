import CITE from "../attributes/cite.js";
import DATETIME from "../attributes/datetime.js";

/**
 * Defines text that has been deleted from a document
 *
 */
class DEL extends HTML5Element {
  constructor() {
    this.tagName = "del";
  }

  static get elementAttributes() {
    return [CITE, DATETIME];
  }
}
export default DEL;
