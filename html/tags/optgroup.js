import DISABLED from "../attributes/disabled.js";
import LABEL from "../attributes/label.js";

/**
 * Defines a group of related options in a drop-down list
 *
 */
class OPTGROUP extends HTML5Element {
  constructor() {
    this.tagName = "optgroup";
  }

  static get elementAttributes() {
    return [DISABLED, LABEL];
  }
}
export default OPTGROUP;
