import NAME from "../attributes/name.js";
import VALUE from "../attributes/value.js";

/**
 * Defines a parameter for an object
 *
 */
class PARAM extends HTML5Element {
  constructor() {
    this.tagName = "param";
  }

  static get elementAttributes() {
    return [NAME, VALUE];
  }
}
export default PARAM;
