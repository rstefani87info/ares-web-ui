import AUTOPLAY from "../attributes/autoplay.js";
import CONTROLS from "../attributes/controls.js";
import LOOP from "../attributes/loop.js";
import MUTED from "../attributes/muted.js";
import PRELOAD from "../attributes/preload.js";
import SRC from "../attributes/src.js";

/**
 * Defines embedded sound content
 *
 */
class AUDIO extends HTML5Element {
  constructor() {
    this.tagName = "audio";
  }

  static get elementAttributes() {
    return [AUTOPLAY, CONTROLS, LOOP, MUTED, PRELOAD, SRC];
  }
}
export default AUDIO;
