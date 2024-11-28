import ALLOW from "../attributes/allow.js";
import ALLOWFULLSCREEN from "../attributes/allowfullscreen.js";
import ALLOWPAYMENTREQUEST from "../attributes/allowpaymentrequest.js";
import HEIGHT from "../attributes/height.js";
import LOADING from "../attributes/loading.js";
import NAME from "../attributes/name.js";
import REFERRERPOLICY from "../attributes/referrerpolicy.js";
import SANDBOX from "../attributes/sandbox.js";
import SRC from "../attributes/src.js";
import SRCDOC from "../attributes/srcdoc.js";
import WIDTH from "../attributes/width.js";

/**
 * Defines an inline frame
 *
 */
class IFRAME extends HTML5Element {
  constructor() {
    this.tagName = "iframe";
  }

  static get elementAttributes() {
    return [
      ALLOW,
      ALLOWFULLSCREEN,
      ALLOWPAYMENTREQUEST,
      HEIGHT,
      LOADING,
      NAME,
      REFERRERPOLICY,
      SANDBOX,
      SRC,
      SRCDOC,
      WIDTH,
    ];
  }

  /**
   * Specifies a feature policy for the <iframe>.
   * @return ,
   *
   */
  get allow() {
    this.attributes = this.attributes || {};
    return this.attributes["ALLOW"].value();
  }

  set allow(value) {
    this.attributes = this.attributes || {};
    this.attributes["ALLOW"] = new ALLOW(value);
  }

  /**
     * Set to true if the <iframe> can activate fullscreen mode by calling the 
    requestFullscreen() method. 
     * @return truefalse
     * 
    */
  get allowfullscreen() {
    this.attributes = this.attributes || {};
    return this.attributes["ALLOWFULLSCREEN"].value();
  }

  set allowfullscreen(value) {
    this.attributes = this.attributes || {};
    this.attributes["ALLOWFULLSCREEN"] = new ALLOWFULLSCREEN(value);
  }

  /**
     * Set to true if a cross-origin <iframe> should be allowed to invoke the 
    Payment Request API. 
     * @return truefalse
     * 
    */
  get allowpaymentrequest() {
    this.attributes = this.attributes || {};
    return this.attributes["ALLOWPAYMENTREQUEST"].value();
  }

  set allowpaymentrequest(value) {
    this.attributes = this.attributes || {};
    this.attributes["ALLOWPAYMENTREQUEST"] = new ALLOWPAYMENTREQUEST(value);
  }

  /**
     * Specifies whether a browser should load an iframe immediately or to 
    defer loading of iframes until some conditions are met. 
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
     * Specifies which referrer information to send when 
    fetching the iframe . 
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
export default IFRAME;
