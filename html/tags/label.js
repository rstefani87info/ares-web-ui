import FOR from "../attributes/for.js";
import FORM from "../attributes/form.js";

/**
 * Defines a label for an <input> element
 *
 */
class LABEL extends HTML5Element {
  constructor() {
    this.tagName = "label";
  }

  static get elementAttributes() {
    return [FOR, FORM];
  }
}
export default LABEL;
