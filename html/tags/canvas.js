import HEIGHT from "../attributes/height.js";
import WIDTH from "../attributes/width.js";

/**
 * Used to draw graphics, on the fly, via scripting (usually JavaScript)
 *
 */
class CANVAS extends HTML5Element {
  constructor() {
    this.tagName = "canvas";
  }

  static get elementAttributes() {
    return [HEIGHT, WIDTH];
  }
}
export default CANVAS;
