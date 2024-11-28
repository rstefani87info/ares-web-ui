import DATETIME from "../attributes/datetime.js";

/**
 * Defines a specific time (or datetime)
 *
 */
class TIME extends HTML5Element {
  constructor() {
    this.tagName = "time";
  }

  static get elementAttributes() {
    return [DATETIME];
  }
}
export default TIME;
