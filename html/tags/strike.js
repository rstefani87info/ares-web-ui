/**
 * Not supported in HTML5. Use <del> or <s> instead.Defines strikethrough text
 *          * @deprecated Not supported in HTML5. Use <del> or <s> instead..
 */
class STRIKE extends HTML5Element {
  constructor() {
    this.tagName = "strike";
  }

  static get elementAttributes() {
    return [];
  }
}
export default STRIKE;
