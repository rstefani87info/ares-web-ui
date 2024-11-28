import CHARSET from "../attributes/charset.js";
import CONTENT from "../attributes/content.js";
import HTTP_EQUIV from "../attributes/http_equiv.js";
import NAME from "../attributes/name.js";

/**
 * Defines metadata about an HTML document
 *
 */
class META extends HTML5Element {
  constructor() {
    this.tagName = "meta";
  }

  static get elementAttributes() {
    return [CHARSET, CONTENT, HTTP_EQUIV, NAME];
  }
}
export default META;
