import AUTOFOCUS from "../attributes/autofocus.js";
import DISABLED from "../attributes/disabled.js";
import FORM from "../attributes/form.js";
import FORMACTION from "../attributes/formaction.js";
import FORMENCTYPE from "../attributes/formenctype.js";
import FORMMETHOD from "../attributes/formmethod.js";
import FORMNOVALIDATE from "../attributes/formnovalidate.js";
import FORMTARGET from "../attributes/formtarget.js";
import POPOVERTARGET from "../attributes/popovertarget.js";
import POPOVERTARGETACTION from "../attributes/popovertargetaction.js";
import NAME from "../attributes/name.js";
import TYPE from "../attributes/type.js";
import VALUE from "../attributes/value.js";

/**
 * Defines a clickable button
 *
 */
class BUTTON extends HTML5Element {
  constructor() {
    this.tagName = "button";
  }

  static get elementAttributes() {
    return [
      AUTOFOCUS,
      DISABLED,
      FORM,
      FORMACTION,
      FORMENCTYPE,
      FORMMETHOD,
      FORMNOVALIDATE,
      FORMTARGET,
      POPOVERTARGET,
      POPOVERTARGETACTION,
      NAME,
      TYPE,
      VALUE,
    ];
  }

  /**
   * Specifies how form-data should be encoded before sending it to a server. Only for type="submit".
   * @return application/x-www-form-urlencoded, multipart/form-data, text/plain
   *
   */
  get formenctype() {
    this.attributes = this.attributes || {};
    return this.attributes["FORMENCTYPE"].value();
  }

  set formenctype(value) {
    this.attributes = this.attributes || {};
    this.attributes["FORMENCTYPE"] = new FORMENCTYPE(value);
  }

  /**
   * Specifies how to send the form-data (which HTTP method to use). Only for type="submit".
   * @return getpost
   *
   */
  get formmethod() {
    this.attributes = this.attributes || {};
    return this.attributes["FORMMETHOD"].value();
  }

  set formmethod(value) {
    this.attributes = this.attributes || {};
    this.attributes["FORMMETHOD"] = new FORMMETHOD(value);
  }

  /**
   * Specifies that the form-data should not be validated on submission. Only for type="submit" .
   * @return formnovalidate
   *
   */
  get formnovalidate() {
    this.attributes = this.attributes || {};
    return this.attributes["FORMNOVALIDATE"].value();
  }

  set formnovalidate(value) {
    this.attributes = this.attributes || {};
    this.attributes["FORMNOVALIDATE"] = new FORMNOVALIDATE(value);
  }

  /**
   * Specifies where to display the response after submitting the form. Only for type="submit".
   * @return _blank, _self, _parent, _top, framename
   *
   */
  get formtarget() {
    this.attributes = this.attributes || {};
    return this.attributes["FORMTARGET"].value();
  }

  set formtarget(value) {
    this.attributes = this.attributes || {};
    this.attributes["FORMTARGET"] = new FORMTARGET(value);
  }
}
export default BUTTON;
