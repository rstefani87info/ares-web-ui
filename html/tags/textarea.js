import AUTOFOCUS from "../attributes/autofocus.js";
import COLS from "../attributes/cols.js";
import DIRNAME from "../attributes/dirname.js";
import DISABLED from "../attributes/disabled.js";
import FORM from "../attributes/form.js";
import MAXLENGTH from "../attributes/maxlength.js";
import NAME from "../attributes/name.js";
import PLACEHOLDER from "../attributes/placeholder.js";
import READONLY from "../attributes/readonly.js";
import REQUIRED from "../attributes/required.js";
import ROWS from "../attributes/rows.js";
import WRAP from "../attributes/wrap.js";

/**
 * Defines a multiline input control (text area)
 *
 */
class TEXTAREA extends HTML5Element {
  constructor() {
    this.tagName = "textarea";
  }

  static get elementAttributes() {
    return [
      AUTOFOCUS,
      COLS,
      DIRNAME,
      DISABLED,
      FORM,
      MAXLENGTH,
      NAME,
      PLACEHOLDER,
      READONLY,
      REQUIRED,
      ROWS,
      WRAP,
    ];
  }
}
export default TEXTAREA;
