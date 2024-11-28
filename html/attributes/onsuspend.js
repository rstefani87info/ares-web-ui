/**
     * Script to be run when fetching the media data is stopped before it is 
completely loaded for whatever reason
     * 
    */
class ONSUSPEND extends HTML5EventAttribute {
  constructor() {
    this.name = "onsuspend";
  }
}
export default ONSUSPEND;
