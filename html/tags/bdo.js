import DIR from "../attributes/dir.js";

/**
 * Overrides the current text direction
 *
 */
class BDO extends HTML5Element {
  constructor() {
    this.tagName = "bdo";
  }

  static get elementAttributes() {
    return [DIR];
  }
}
export default BDO;
