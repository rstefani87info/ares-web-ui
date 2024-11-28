/**
 * Not supported in HTML5. Use <ul> instead.Defines a directory list
 *          * @deprecated Not supported in HTML5. Use <ul> instead..
 */
class DIR extends HTML5Element {
  constructor() {
    this.tagName = "dir";
  }

  static get elementAttributes() {
    return [];
  }
}
export default DIR;
