import CITE from "../attributes/cite.js";

/**
 * Defines a section that is quoted from another source
 *
 */
class BLOCKQUOTE extends HTML5Element {
  constructor() {
    this.tagName = "blockquote";
  }

  static get elementAttributes() {
    return [CITE];
  }
}
export default BLOCKQUOTE;
