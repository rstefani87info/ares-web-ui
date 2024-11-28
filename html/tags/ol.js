import REVERSED from "../attributes/reversed.js";
import START from "../attributes/start.js";
import TYPE from "../attributes/type.js";

/**
 * Defines an ordered list
 *
 */
class OL extends HTML5Element {
  constructor() {
    this.tagName = "ol";
  }

  static get elementAttributes() {
    return [REVERSED, START, TYPE];
  }
}
export default OL;
