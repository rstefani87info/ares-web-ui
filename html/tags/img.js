import ALT from "../attributes/alt.js";
import CROSSORIGIN from "../attributes/crossorigin.js";
import HEIGHT from "../attributes/height.js";
import ISMAP from "../attributes/ismap.js";
import LOADING from "../attributes/loading.js";
import LONGDESC from "../attributes/longdesc.js";
import REFERRERPOLICY from "../attributes/referrerpolicy.js";
import SIZES from "../attributes/sizes.js";
import SRC from "../attributes/src.js";
import SRCSET from "../attributes/srcset.js";
import USEMAP from "../attributes/usemap.js";
import WIDTH from "../attributes/width.js";

/**
 * Defines an image
 *
 */
class IMG extends HTML5Element {
  constructor() {
    this.tagName = "img";
  }

  static get elementAttributes() {
    return [
      ALT,
      CROSSORIGIN,
      HEIGHT,
      ISMAP,
      LOADING,
      LONGDESC,
      REFERRERPOLICY,
      SIZES,
      SRC,
      SRCSET,
      USEMAP,
      WIDTH,
    ];
  }

  /**
   * Allow images from third-party sites that allow cross-origin access to be used with canvas.
   * @return anonymous, use-credentials
   *
   */
  get crossorigin() {
    this.attributes = this.attributes || {};
    return this.attributes["CROSSORIGIN"].value();
  }

  set crossorigin(value) {
    this.attributes = this.attributes || {};
    this.attributes["CROSSORIGIN"] = new CROSSORIGIN(value);
  }

  /**
     * Specifies whether a browser should load an image immediately or to defer 
    loading of images until some conditions are met. 
     * @return eagerlazy
     * 
    */
  get loading() {
    this.attributes = this.attributes || {};
    return this.attributes["LOADING"].value();
  }

  set loading(value) {
    this.attributes = this.attributes || {};
    this.attributes["LOADING"] = new LOADING(value);
  }

  /**
   * Specifies a URL to a detailed description of an image.
   * @return URL
   *
   */
  get longdesc() {
    this.attributes = this.attributes || {};
    return this.attributes["LONGDESC"].value();
  }

  set longdesc(value) {
    this.attributes = this.attributes || {};
    this.attributes["LONGDESC"] = new LONGDESC(value);
  }

  /**
   * Specifies which referrer information to use when fetching an image.
   * @return no-referrerno-referrer-when-downgradeorigin, origin-when-cross-originunsafe-url
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
export default IMG;
