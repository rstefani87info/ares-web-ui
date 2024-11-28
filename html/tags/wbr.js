/**
 * Defines a possible line-break
 *
 */
class WBR extends HTML5Element {
  constructor() {
    this.tagName = "wbr";
  }

  static get elementAttributes() {
    return [];
  }
}
export default WBR;
