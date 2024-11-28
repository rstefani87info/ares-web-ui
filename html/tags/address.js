/**
 * Defines contact information for the author/owner of a document
 *
 */
class ADDRESS extends HTML5Element {
  constructor() {
    this.tagName = "address";
  }

  static get elementAttributes() {
    return [];
  }
}
export default ADDRESS;
