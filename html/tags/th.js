import ABBR from "../attributes/abbr.js";
import COLSPAN from "../attributes/colspan.js";
import HEADERS from "../attributes/headers.js";
import ROWSPAN from "../attributes/rowspan.js";
import SCOPE from "../attributes/scope.js";

/**
 * Defines a header cell in a table
 *
 */
class TH extends HTML5Element {
  constructor() {
    this.tagName = "th";
  }

  static get elementAttributes() {
    return [ABBR, COLSPAN, HEADERS, ROWSPAN, SCOPE];
  }

  /**
   * Specifies an abbreviated version of the content in a header cell.
   * @return text
   *
   */
  get abbr() {
    this.attributes = this.attributes || {};
    return this.attributes["ABBR"].value();
  }

  set abbr(value) {
    this.attributes = this.attributes || {};
    this.attributes["ABBR"] = new ABBR(value);
  }
}
export default TH;
