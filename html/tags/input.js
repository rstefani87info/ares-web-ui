import ACCEPT from "../attributes/accept.js";
import ALT from "../attributes/alt.js";
import AUTOCOMPLETE from "../attributes/autocomplete.js";
import AUTOFOCUS from "../attributes/autofocus.js";
import CHECKED from "../attributes/checked.js";
import DIRNAME from "../attributes/dirname.js";
import DISABLED from "../attributes/disabled.js";
import FORM from "../attributes/form.js";
import FORMACTION from "../attributes/formaction.js";
import FORMENCTYPE from "../attributes/formenctype.js";
import FORMMETHOD from "../attributes/formmethod.js";
import FORMNOVALIDATE from "../attributes/formnovalidate.js";
import FORMTARGET from "../attributes/formtarget.js";
import HEIGHT from "../attributes/height.js";
import LIST from "../attributes/list.js";
import MAX from "../attributes/max.js";
import MAXLENGTH from "../attributes/maxlength.js";
import MIN from "../attributes/min.js";
import MINLENGTH from "../attributes/minlength.js";
import MULTIPLE from "../attributes/multiple.js";
import NAME from "../attributes/name.js";
import PATTERN from "../attributes/pattern.js";
import PLACEHOLDER from "../attributes/placeholder.js";
import POPOVERTARGET from "../attributes/popovertarget.js";
import POPOVERTARGETACTION from "../attributes/popovertargetaction.js";
import READONLY from "../attributes/readonly.js";
import REQUIRED from "../attributes/required.js";
import SIZE from "../attributes/size.js";
import SRC from "../attributes/src.js";
import STEP from "../attributes/step.js";
import TYPE from "../attributes/type.js";
import VALUE from "../attributes/value.js";
import WIDTH from "../attributes/width.js";

/**
 * Defines an input control
 *
 */
class INPUT extends HTML5Element {
  constructor() {
    this.tagName = "input";
  }

  static get elementAttributes() {
    return [
      ACCEPT,
      ALT,
      AUTOCOMPLETE,
      AUTOFOCUS,
      CHECKED,
      DIRNAME,
      DISABLED,
      FORM,
      FORMACTION,
      FORMENCTYPE,
      FORMMETHOD,
      FORMNOVALIDATE,
      FORMTARGET,
      HEIGHT,
      LIST,
      MAX,
      MAXLENGTH,
      MIN,
      MINLENGTH,
      MULTIPLE,
      NAME,
      PATTERN,
      PLACEHOLDER,
      POPOVERTARGET,
      POPOVERTARGETACTION,
      READONLY,
      REQUIRED,
      SIZE,
      SRC,
      STEP,
      TYPE,
      VALUE,
      WIDTH,
    ];
  }

  /**
   * Specifies how the form-data should be encoded when submitting it to the server (for type="submit" and type="image").
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
   * Defines the HTTP method for sending data to the action URL (for type="submit" and type="image").
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
   * Defines that form elements should not be validated when submitted.
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
   * Specifies where to display the response that is received after submitting the form (for type="submit" and type="image").
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

  /**
   * Specifies the minimum number of characters required in an <input> element.
   * @return number
   *
   */
  get minlength() {
    this.attributes = this.attributes || {};
    return this.attributes["MINLENGTH"].value();
  }

  set minlength(value) {
    this.attributes = this.attributes || {};
    this.attributes["MINLENGTH"] = new MINLENGTH(value);
  }
}
export default INPUT;
