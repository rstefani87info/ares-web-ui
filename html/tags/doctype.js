/**
 * Defines the document type
 *
 */
class DOCTYPE extends HTML5Element {
  constructor() {
    this.tagName = "doctype";
  }

  static get elementAttributes() {
    return [];
  }
}
export default DOCTYPE;
