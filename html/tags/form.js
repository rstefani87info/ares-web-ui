import ACCEPT_CHARSET from "../attributes/accept_charset.js";
import ACTION from "../attributes/action.js";
import AUTOCOMPLETE from "../attributes/autocomplete.js";
import ENCTYPE from "../attributes/enctype.js";
import METHOD from "../attributes/method.js";
import NAME from "../attributes/name.js";
import NOVALIDATE from "../attributes/novalidate.js";
import REL from "../attributes/rel.js";
import TARGET from "../attributes/target.js";

/**
 * Defines an HTML form for user input
 *
 */
class FORM extends HTML5Element {
  constructor() {
    this.tagName = "form";
  }

  static get elementAttributes() {
    return [
      ACCEPT_CHARSET,
      ACTION,
      AUTOCOMPLETE,
      ENCTYPE,
      METHOD,
      NAME,
      NOVALIDATE,
      REL,
      TARGET,
    ];
  }
}
export default FORM;
