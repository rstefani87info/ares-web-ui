import CROSSORIGIN from "../attributes/crossorigin.js";
import HREF from "../attributes/href.js";
import HREFLANG from "../attributes/hreflang.js";
import MEDIA from "../attributes/media.js";
import REFERRERPOLICY from "../attributes/referrerpolicy.js";
import REL from "../attributes/rel.js";
import SIZES from "../attributes/sizes.js";
import TITLE from "../attributes/title.js";
import TYPE from "../attributes/type.js";

/**
     * Defines the relationship between a document and an external resource (most 
used to link to style sheets)
     * 
    */
class LINK extends HTML5Element {
  constructor() {
    this.tagName = "link";
  }

  static get elementAttributes() {
    return [
      CROSSORIGIN,
      HREF,
      HREFLANG,
      MEDIA,
      REFERRERPOLICY,
      REL,
      SIZES,
      TITLE,
      TYPE,
    ];
  }

  /**
   * Specifies how the element handles cross-origin requests.
   * @return anonymoususe-credentials
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
   * Specifies which referrer to use when fetching the resource.
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
export default LINK;
