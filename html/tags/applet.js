/**
 * Not supported in HTML5. Use <embed> or <object> instead.Defines an embedded applet
 *          * @deprecated Not supported in HTML5. Use <embed> or <object> instead..
 */
class APPLET extends HTML5Element {
  constructor() {
    this.tagName = "applet";
  }

  static get elementAttributes() {
    return [];
  }
}
export default APPLET;
