import HREF from "../attributes/href.js";
import TARGET from "../attributes/target.js";

/**
 * Specifies the base URL/target for all relative URLs in a document
 *
 */
class BASE extends HTML5Element {
  constructor() {
    this.tagName = "base";
  }

  static get elementAttributes() {
    return [HREF, TARGET];
  }
}
export default BASE;
