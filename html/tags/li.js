import VALUE from "../attributes/value.js";

/**
 * Defines a list item
 *
 */
class LI extends HTML5Element {
  constructor() {
    this.tagName = "li";
  }

  static get elementAttributes() {
    return [VALUE];
  }
}
export default LI;
