import DATA from "../attributes/data.js";
import FORM from "../attributes/form.js";
import HEIGHT from "../attributes/height.js";
import NAME from "../attributes/name.js";
import TYPE from "../attributes/type.js";
import TYPEMUSTMATCH from "../attributes/typemustmatch.js";
import USEMAP from "../attributes/usemap.js";
import WIDTH from "../attributes/width.js";

/**
 * Defines a container for an external application
 *
 */
class OBJECT extends HTML5Element {
  constructor() {
    this.tagName = "object";
  }

  static get elementAttributes() {
    return [DATA, FORM, HEIGHT, NAME, TYPE, TYPEMUSTMATCH, USEMAP, WIDTH];
  }

  /**
     * Specifies whether the type attribute and the actual content of the 
    resource must match to be displayed. 
     * @return true/false
     * 
    */
  get typemustmatch() {
    this.attributes = this.attributes || {};
    return this.attributes["TYPEMUSTMATCH"].value();
  }

  set typemustmatch(value) {
    this.attributes = this.attributes || {};
    this.attributes["TYPEMUSTMATCH"] = new TYPEMUSTMATCH(value);
  }
}
export default OBJECT;
