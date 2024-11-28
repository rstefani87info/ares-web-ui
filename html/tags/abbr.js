/**
 * Defines an abbreviation or an acronym
 *
 */
class ABBR extends HTML5Element {
  constructor() {
    this.tagName = "abbr";
  }

  static get elementAttributes() {
    return [];
  }
}
export default ABBR;
