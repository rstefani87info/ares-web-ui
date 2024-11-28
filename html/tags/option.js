import DISABLED from "../attributes/disabled.js";
import LABEL from "../attributes/label.js";
import SELECTED from "../attributes/selected.js";
import VALUE from "../attributes/value.js";

/**
 * Defines an option in a drop-down list
 *
 */
class OPTION extends HTML5Element {
  constructor() {
    this.tagName = "option";
  }

  static get elementAttributes() {
    return [DISABLED, LABEL, SELECTED, VALUE];
  }
}
export default OPTION;
