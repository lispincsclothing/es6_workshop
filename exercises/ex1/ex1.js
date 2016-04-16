const X = 2
var fns = [];
// Two notes - const has to has assignment, everything on line if declared is const....e.g..
// const X=2, fns[];
// Also, no way to garage collect with large array, e.g.
const y = [....];
y = null //doesn't work, since const can't be released

// are there any ways that I can remove immeditely invoked function, use block scoping or let
// http://benalman.com/news/2010/11/immediately-invoked-function-expression/

// (function(){
// 	var x = 5;
//
// 	for (let i=0; i<x; i++) {
// 		// ..
// 		fns[i]= function () {
// 			return i;
// 		}
// 	}
// })();

{const X = 5;
	for (let i=0; i<X; i++) {
		// ..
		fns.push(function () {
			return i;
		});
	}
}

console.log(
	(x * 2) === fns[x*2]()
);
// true
