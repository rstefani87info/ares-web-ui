import ASYNC from "../attributes/async.js";
import CROSSORIGIN from "../attributes/crossorigin.js";
import DEFER from "../attributes/defer.js";
import INTEGRITY from "../attributes/integrity.js";
import NOMODULE from "../attributes/nomodule.js";
import REFERRERPOLICY from "../attributes/referrerpolicy.js";
import SRC from "../attributes/src.js";
import TYPE from "../attributes/type.js";

/**
 * Defines a client-side script
 *
 */
class SCRIPT extends HTML5Element {
  constructor() {
    this.tagName = "script";
  }

  static get elementAttributes() {
    return [
      ASYNC,
      CROSSORIGIN,
      DEFER,
      INTEGRITY,
      NOMODULE,
      REFERRERPOLICY,
      SRC,
      TYPE,
    ];
  }

  /**
   * Sets the mode of the request to an HTTP CORS Request.
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
     * Allows a browser to check the fetched script to ensure that the code is 
    never loaded if the source has been manipulated. 
     * @return filehash
     * 
    */
  get integrity() {
    this.attributes = this.attributes || {};
    return this.attributes["INTEGRITY"].value();
  }

  set integrity(value) {
    this.attributes = this.attributes || {};
    this.attributes["INTEGRITY"] = new INTEGRITY(value);
  }

  /**
     * Specifies that the script should not be executed in browsers supporting
    ES2015 modules . 
     * @return TrueFalse
     * 
    */
  get nomodule() {
    this.attributes = this.attributes || {};
    return this.attributes["NOMODULE"].value();
  }

  set nomodule(value) {
    this.attributes = this.attributes || {};
    this.attributes["NOMODULE"] = new NOMODULE(value);
  }

  /**
   * Specifies which referrer information to send when fetching a script.
   * @return no-referrerno-referrer-when-downgradeorigin, origin-when-cross-originsame-originstrict-origin, strict-origin-when-cross-originunsafe-url
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
export default SCRIPT;
