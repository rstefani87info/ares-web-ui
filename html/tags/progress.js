import MAX from "../attributes/max.js";
import VALUE from "../attributes/value.js";

/**
 * Represents the progress of a task
 *
 */
class PROGRESS extends HTML5Element {
  constructor() {
    this.tagName = "progress";
  }

  static get elementAttributes() {
    return [MAX, VALUE];
  }
}
export default PROGRESS;
