import NAME from "../attributes/name.js";

/**
 * Defines an image map
 *
 */
class MAP extends HTML5Element {
  constructor() {
    this.tagName = "map";
  }

  static get elementAttributes() {
    return [NAME];
  }
}
export default MAP;
