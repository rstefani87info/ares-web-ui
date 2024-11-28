/**
 * Not supported in HTML5.Defines an alternate content for users that do not support frames
 *          * @deprecated Not supported in HTML5..
 */
class NOFRAMES extends HTML5Element {
  constructor() {
    this.tagName = "noframes";
  }

  static get elementAttributes() {
    return [];
  }
}
export default NOFRAMES;
