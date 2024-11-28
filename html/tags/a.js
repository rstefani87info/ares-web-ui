import DOWNLOAD from "../attributes/download.js";
import HREF from "../attributes/href.js";
import HREFLANG from "../attributes/hreflang.js";
import MEDIA from "../attributes/media.js";
import PING from "../attributes/ping.js";
import REFERRERPOLICY from "../attributes/referrerpolicy.js";
import REL from "../attributes/rel.js";
import TARGET from "../attributes/target.js";
import TYPE from "../attributes/type.js";

/**
 * Defines a hyperlink
 *
 */
class A extends HTML5Element {
  constructor() {
    this.tagName = "a";
  }

  static get elementAttributes() {
    return [
      DOWNLOAD,
      HREF,
      HREFLANG,
      MEDIA,
      PING,
      REFERRERPOLICY,
      REL,
      TARGET,
      TYPE,
    ];
  }

  /**
     * Specifies a space-separated list of URLs to which, when the link is 
    followed, post requests with the body ping will be sent by the browser (in 
    the background). Typically used for tracking.. 
     * @return list_of_URLs
     * 
    */
  get ping() {
    this.attributes = this.attributes || {};
    return this.attributes["PING"].value();
  }

  set ping(value) {
    this.attributes = this.attributes || {};
    this.attributes["PING"] = new PING(value);
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
export default A;
