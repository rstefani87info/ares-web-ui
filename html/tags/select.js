import AUTOFOCUS from "../attributes/autofocus.js";
import DISABLED from "../attributes/disabled.js";
import FORM from "../attributes/form.js";
import MULTIPLE from "../attributes/multiple.js";
import NAME from "../attributes/name.js";
import REQUIRED from "../attributes/required.js";
import SIZE from "../attributes/size.js";

/**
 * Defines a drop-down list
 *
 */
class SELECT extends HTML5Element {
  constructor() {
    this.tagName = "select";
  }

  static get elementAttributes() {
    return [AUTOFOCUS, DISABLED, FORM, MULTIPLE, NAME, REQUIRED, SIZE];
  }
}
export default SELECT;
