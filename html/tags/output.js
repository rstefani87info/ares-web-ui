import FOR from "../attributes/for.js";
import FORM from "../attributes/form.js";
import NAME from "../attributes/name.js";

/**
 * Defines the result of a calculation
 *
 */
class OUTPUT extends HTML5Element {
  constructor() {
    this.tagName = "output";
  }

  static get elementAttributes() {
    return [FOR, FORM, NAME];
  }
}
export default OUTPUT;
