/**
 * Not supported in HTML5. Use CSS instead.Specifies a default color, size, and font for all text in a document
 *          * @deprecated Not supported in HTML5. Use CSS instead..
 */
class BASEFONT extends HTML5Element {
  constructor() {
    this.tagName = "basefont";
  }

  static get elementAttributes() {
    return [];
  }
}
export default BASEFONT;
