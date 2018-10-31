class MyClass {
  [Symbol.hasInstance](foo) {
    return foo instanceof Array;
  }
}

let c = [1, 2, 3] instanceof new MyClass() // true
console.log(c)
//Foo[Symbol.hasInstance](foo)
//上面代码中，MyClass是一个类，new MyClass()会返回一个实例。该实例的Symbol.hasInstance方法，会在进行instanceof运算时自动调用，判断左侧的运算子是否为Array的实例。
