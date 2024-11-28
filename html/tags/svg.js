/**
 * Defines a container for SVG graphics
 *
 */
class SVG extends HTML5Element {
  constructor() {
    this.tagName = "svg";
  }

  static get elementAttributes() {
    return [];
  }
}
export default SVG;
