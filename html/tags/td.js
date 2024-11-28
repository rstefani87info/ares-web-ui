import COLSPAN from "../attributes/colspan.js";
import HEADERS from "../attributes/headers.js";
import ROWSPAN from "../attributes/rowspan.js";

/**
 * Defines a cell in a table
 *
 */
class TD extends HTML5Element {
  constructor() {
    this.tagName = "td";
  }

  static get elementAttributes() {
    return [COLSPAN, HEADERS, ROWSPAN];
  }
}
export default TD;
