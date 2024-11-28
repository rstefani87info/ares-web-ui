import DISABLED from "../attributes/disabled.js";
import FORM from "../attributes/form.js";
import NAME from "../attributes/name.js";

/**
 * Groups related elements in a form
 *
 */
class FIELDSET extends HTML5Element {
  constructor() {
    this.tagName = "fieldset";
  }

  static get elementAttributes() {
    return [DISABLED, FORM, NAME];
  }
}
export default FIELDSET;
