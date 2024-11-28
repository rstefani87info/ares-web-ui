import ALT from "../attributes/alt.js";
import COORDS from "../attributes/coords.js";
import DOWNLOAD from "../attributes/download.js";
import HREF from "../attributes/href.js";
import HREFLANG from "../attributes/hreflang.js";
import MEDIA from "../attributes/media.js";
import REFERRERPOLICY from "../attributes/referrerpolicy.js";
import REL from "../attributes/rel.js";
import SHAPE from "../attributes/shape.js";
import TARGET from "../attributes/target.js";
import TYPE from "../attributes/type.js";

/**
 * Defines an area inside an image map
 *
 */
class AREA extends HTML5Element {
  constructor() {
    this.tagName = "area";
  }

  static get elementAttributes() {
    return [
      ALT,
      COORDS,
      DOWNLOAD,
      HREF,
      HREFLANG,
      MEDIA,
      REFERRERPOLICY,
      REL,
      SHAPE,
      TARGET,
      TYPE,
    ];
  }

  /**
   * Specifies which referrer information to send with the link.
   * @return no-referrerno-referrer-when-downgradeorigin, origin-when-cross-originsame-originstrict-origin-when-cross-originunsafe-url
   *
   */
  get referrerpolicy() {
    this.attributes = this.attributes || {};
    return this.attributes["REFERRERPOLICY"].value();
  }

  set referrerpolicy(value) {
    this.attributes = this.attributes || {};
    this.attributes["REFERRERPOLICY"] = new REFERRERPOLICY(value);
  }
}
export default AREA;
