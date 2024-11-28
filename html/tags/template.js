/**
 * Defines a container for content that should be hidden when the page loads
 *
 */
class TEMPLATE extends HTML5Element {
  constructor() {
    this.tagName = "template";
  }

  static get elementAttributes() {
    return [];
  }
}
export default TEMPLATE;
