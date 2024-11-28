/**
     * Defines an alternate content for users that do not support 
client-side scripts
     * 
    */
class NOSCRIPT extends HTML5Element {
  constructor() {
    this.tagName = "noscript";
  }

  static get elementAttributes() {
    return [];
  }
}
export default NOSCRIPT;
