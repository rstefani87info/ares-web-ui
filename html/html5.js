import { MLAttribute , MLElement} from "../ml/ml.js";

export class HTML5Element extends MLElement{
  /**
   * Constructor function for HTML5Element class.
   *
   * @param {string} tagName - The tag name for the HTML5 element.
   * @return {void}
   */
  constructor(elementState = {attributes : {}, content :null}) {
    super(elementState);
  }
}

export class HTML5GlobalAttribute extends MLAttribute {
}