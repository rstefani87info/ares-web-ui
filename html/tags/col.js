import SPAN from "../attributes/span.js";

/**
 * Specifies column properties for each column within a <colgroup> element
 *
 */
class COL extends HTML5Element {
  constructor() {
    this.tagName = "col";
  }

  static get elementAttributes() {
    return [SPAN];
  }
}
export default COL;
