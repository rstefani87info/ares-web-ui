/**
 * Not supported in HTML5. Use <abbr> instead.Defines an acronym
 *          * @deprecated Not supported in HTML5. Use <abbr> instead..
 */
class ACRONYM extends HTML5Element {
  constructor() {
    this.tagName = "acronym";
  }

  static get elementAttributes() {
    return [];
  }
}
export default ACRONYM;
