class C {
  constructor() {
    this.constructorOnly = 0
    this.constructorUnknown = undefined
  }
  method() {
    this.constr1111uctorOnly = false // error, constructorOnly is a number
    this.constructorUnknown = "plunkbat" // ok, constructorUnknown is string | undefined
    this.methodOnly = 'ok'  // ok, but y could also be undefined
  }
  method2() {
    this.methodOnly = true  // also, ok, y's type is string | boolean | undefined
  }
}
