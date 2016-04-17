// Symbol if you want properties on object and you don't want other people to collide with that object
// You can have only one symbol globally
// description only used in debugging tools - not a value - only for yourself
function foo() {
  var ret = {x:1, y:2};
  var sym = Symbol("my special property - not a value");
  ret[sym]=42;
}

var o = foo();

o[Symbol(..)] = 20; //not allowed

// However doesn't allow you to hide symbols
// give list, so same as underscore underscore variables
Object.getOwnPropertySymbols(o);

// can use computed properties to put it directly in objects
function foo() {
  var sym = Symbol("my special property - not a value");
  var ret = {x:1, y:2, [sym]:42};
}
var o = foo();

// Why use this?  Built-in symbols Javascript shipped with (about dozen).  Built-in symbols
// one is iterator
var a = [1,2,3]
var it = a[Symbol.iterator]();

it.next(); // {value: 1, done: false}
it.next(); // {value: 2, done: false}
it.next(); // {value: 3, done: false}
it.next(); // {value: undefined, done: true}

// so if you define iterator, ... can be used for it....

// new - new for of loop - values, compared to for in - index
var a = [30,22,32]
for (v of a) {
  console.log(v);
}

// so make something that's iterable that's not yet.

var o = {
  x:1,
  y:2,
  z:3,
  [Symbol.iterator]: function(){
    var idx = 0;
    var keys = Object.keys(this);
    var context = this; //had to fix this bug to preserve context

    return {
      next(){
          if (idx < keys.length){
            let val = context[keys[idx]];
            return { value: [keys[idx++], val], done: false};
          }
          else {
            return { done: true};
          }
      }
    };
  }
};

for (v of o) {
  console.log(v);
}

// you can also destructure result
for (let [x,y] of o) {
  console.log(x,y);
}

// use spread operator
[...o] //is an array

// generators - use the * reserved keyword
function *foo() {
  console.log("hello");
  yield;
  console.log("world");
  yield;
  console.log("javascript");
  yield;
  console.log("es6");
}
// doesn't actually run, gives you an iterator.  So how do you make it stop? yield keyword
var it = foo();

it.next(); //Hello
it.next(); //world

// can yield values
function *foo() {
  console.log("hello");
  yield 1;
  console.log("world");
  yield 2;
  console.log("javascript");
  yield 3;
  console.log("es6");
}

var it = foo();
for (var v of it) {
  console.log(v);
}

// what if iterator was generator
// can replace the code above with much shorter code
// remember, generator produces an iterator
var o = {
  x:1,
  y:2,
  z:3,
  *[Symbol.iterator](){
    var keys = Object.keys(this);
    for (var idx = 0; idx < keys.length; idx++) {
      yield this[keys[idx]];
    }
  }
};

var it = o;
for (var v of it) {
  console.log(v);
}

// built in iterators on arrays and strings are generators

// all generators are functions, can put arguments
var o = {
  x:1,
  y:2,
  z:3,
  *[Symbol.iterator](x,y){
    var keys = Object.keys(this);
    for (var idx = 0; idx < keys.length; idx++) {
      yield this[keys[idx]];
    }
  }
};

var it = o[Symbol.iterator](1,2);
for (var v of it) {
  console.log(v);
}
