export class MLNode {
  constructor(state) {
    this.parentNode = state.parent||undefined;
    this.state = state;
  }
  valueOf() {
    return this.state;
  }


}

export class MLElement extends MLNode {
  constructor(state = { name , parent: null ,attributes : {}, content :[]}) {
    super(state) ;
    this.name = state.name||undefined;
  }

  get attributes() {
    return this.state.attributes;
  }
  set attributes(value) {
    this.state.attributes = value;
  }
  get content() {
    return this.state.content;
  }
  set content(value) {
    this.state.content = value;
  }
}


export class MLAttribute extends MLNode {
  constructor(state) {
    super(state);
  }
  get value() {
    return this.state;
  }
  set value(value) {
    if(this.validate && !this.validate(value))throw new Error("Invalid value in attribute "+this.name+" : "+value);
    this.state = value;
  }
}
