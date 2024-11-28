import AUTOPLAY from "../attributes/autoplay.js";
import CONTROLS from "../attributes/controls.js";
import HEIGHT from "../attributes/height.js";
import LOOP from "../attributes/loop.js";
import MUTED from "../attributes/muted.js";
import POSTER from "../attributes/poster.js";
import PRELOAD from "../attributes/preload.js";
import SRC from "../attributes/src.js";
import WIDTH from "../attributes/width.js";

/**
 * Defines embedded video content
 *
 */
class VIDEO extends HTML5Element {
  constructor() {
    this.tagName = "video";
  }

  static get elementAttributes() {
    return [
      AUTOPLAY,
      CONTROLS,
      HEIGHT,
      LOOP,
      MUTED,
      POSTER,
      PRELOAD,
      SRC,
      WIDTH,
    ];
  }
}
export default VIDEO;
