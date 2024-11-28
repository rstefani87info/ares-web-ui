import FORM from "../attributes/form.js";
import HIGH from "../attributes/high.js";
import LOW from "../attributes/low.js";
import MAX from "../attributes/max.js";
import MIN from "../attributes/min.js";
import OPTIMUM from "../attributes/optimum.js";
import VALUE from "../attributes/value.js";

/**
 * Defines a scalar measurement within a known range (a gauge)
 *
 */
class METER extends HTML5Element {
  constructor() {
    this.tagName = "meter";
  }

  static get elementAttributes() {
    return [FORM, HIGH, LOW, MAX, MIN, OPTIMUM, VALUE];
  }
}
export default METER;
