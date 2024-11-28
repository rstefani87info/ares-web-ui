/**
 * Not supported in HTML5.Defines a window (a frame) in a frameset
 *          * @deprecated Not supported in HTML5..
 */
class FRAME extends HTML5Element {
  constructor() {
    this.tagName = "frame";
  }

  static get elementAttributes() {
    return [];
  }
}
export default FRAME;
