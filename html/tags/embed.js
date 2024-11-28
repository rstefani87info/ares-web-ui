import HEIGHT from "../attributes/height.js";
import SRC from "../attributes/src.js";
import TYPE from "../attributes/type.js";
import WIDTH from "../attributes/width.js";

/**
 * Defines a container for an external application
 *
 */
class EMBED extends HTML5Element {
  constructor() {
    this.tagName = "embed";
  }

  static get elementAttributes() {
    return [HEIGHT, SRC, TYPE, WIDTH];
  }
}
export default EMBED;
