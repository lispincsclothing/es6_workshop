function diff(x, y) {
    if (x > y) {
        // var tmp = x;
        let tmp = x;
        // implicit scoping mechanism....(not obvious block is scope if down 50 lines)
        // adds mental tax
        x = y;
        y = tmp;
        // alternate method below is explicit form, whic is...
        {let tmp;
          tmp = x;
          x = y;
          y = tmp;
        }
    }
}

function foo() {
  for (var i = 0; i < array.length; i++) {
    array[i]
  }
}

function foo(x) {
  // closure and loops issue
  // http://www.mennovanslooten.nl/blog/post/62
  // most people don't understand how closure works, face below problem with event handler
  // most common example of closure is module pattern

  // for (var i = 0; i < x; i++) {
  for (let i = 0; i <= x; i++) {
    setTimeout(function (){
      console.log("i:", i);
    }, i*1000);
    // old solution is use ife encapsulation setTimeout
  }
}

// let block, invented by firefox, rejected by ES6
let(x=2){
}
// but can do....
{ let x = 2, y, z;
  // ..
}
