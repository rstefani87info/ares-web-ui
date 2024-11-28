/**
 * Defines what to show in browsers that do not support ruby annotations
 *
 */
class RP extends HTML5Element {
  constructor() {
    this.tagName = "rp";
  }

  static get elementAttributes() {
    return [];
  }
}
export default RP;
