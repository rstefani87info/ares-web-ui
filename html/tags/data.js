import VALUE from "../attributes/value.js";

/**
     * Adds a machine-readable 
translation of a given content
     * 
    */
class DATA extends HTML5Element {
  constructor() {
    this.tagName = "data";
  }

  static get elementAttributes() {
    return [VALUE];
  }
}
export default DATA;
