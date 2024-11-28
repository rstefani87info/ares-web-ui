import MEDIA from "../attributes/media.js";
import TYPE from "../attributes/type.js";

/**
 * Defines style information for a document
 *
 */
class STYLE extends HTML5Element {
  constructor() {
    this.tagName = "style";
  }

  static get elementAttributes() {
    return [MEDIA, TYPE];
  }
}
export default STYLE;
