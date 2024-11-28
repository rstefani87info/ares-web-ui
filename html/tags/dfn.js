/**
 * Specifies a term that is going to be defined within the content
 *
 */
class DFN extends HTML5Element {
  constructor() {
    this.tagName = "dfn";
  }

  static get elementAttributes() {
    return [];
  }
}
export default DFN;
