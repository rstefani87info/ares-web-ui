import DEFAULT from "../attributes/default.js";
import KIND from "../attributes/kind.js";
import LABEL from "../attributes/label.js";
import SRC from "../attributes/src.js";
import SRCLANG from "../attributes/srclang.js";

/**
 * Defines text tracks for media elements (<video> and <audio>)
 *
 */
class TRACK extends HTML5Element {
  constructor() {
    this.tagName = "track";
  }

  static get elementAttributes() {
    return [DEFAULT, KIND, LABEL, SRC, SRCLANG];
  }
}
export default TRACK;
