import SPAN from "../attributes/span.js";

/**
 * Specifies a group of one or more columns in a table for formatting
 *
 */
class COLGROUP extends HTML5Element {
  constructor() {
    this.tagName = "colgroup";
  }

  static get elementAttributes() {
    return [SPAN];
  }
}
export default COLGROUP;
