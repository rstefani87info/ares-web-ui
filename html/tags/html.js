import XMLNS from "../attributes/xmlns.js";

/**
 * Defines the root of an HTML document
 *
 */
class HTML extends HTML5Element {
  constructor() {
    this.tagName = "html";
  }

  static get elementAttributes() {
    return [XMLNS];
  }

  /**
   * Specifies the XML namespace attribute (If you need your content to conform to XHTML).
   * @return http://www.w3.org/1999/xhtml
   *
   */
  get xmlns() {
    this.attributes = this.attributes || {};
    return this.attributes["XMLNS"].value();
  }

  set xmlns(value) {
    this.attributes = this.attributes || {};
    this.attributes["XMLNS"] = new XMLNS(value);
  }
}
export default HTML;
