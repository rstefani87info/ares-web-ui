import OPEN from "../attributes/open.js";

/**
 * Defines additional details that the user can view or hide
 *
 */
class DETAILS extends HTML5Element {
  constructor() {
    this.tagName = "details";
  }

  static get elementAttributes() {
    return [OPEN];
  }
}
export default DETAILS;
