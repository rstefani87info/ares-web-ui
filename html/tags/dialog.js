import OPEN from "../attributes/open.js";

/**
 * Defines a dialog box or window
 *
 */
class DIALOG extends HTML5Element {
  constructor() {
    this.tagName = "dialog";
  }

  static get elementAttributes() {
    return [OPEN];
  }
}
export default DIALOG;
