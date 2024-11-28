import MEDIA from "../attributes/media.js";
import SIZES from "../attributes/sizes.js";
import SRC from "../attributes/src.js";
import SRCSET from "../attributes/srcset.js";
import TYPE from "../attributes/type.js";

/**
 * Defines multiple media resources for media elements (<video> and <audio>)
 *
 */
class SOURCE extends HTML5Element {
  constructor() {
    this.tagName = "source";
  }

  static get elementAttributes() {
    return [MEDIA, SIZES, SRC, SRCSET, TYPE];
  }
}
export default SOURCE;
