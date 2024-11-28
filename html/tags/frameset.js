/**
 * Not supported in HTML5.Defines a set of frames
 *          * @deprecated Not supported in HTML5..
 */
class FRAMESET extends HTML5Element {
  constructor() {
    this.tagName = "frameset";
  }

  static get elementAttributes() {
    return [];
  }
}
export default FRAMESET;
