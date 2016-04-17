var numbers = {
	// ..
	// know you have to have iterator, so use generator
	// also know you have to have default values
	*[Symbol.iterator]({
		start = 0,
		max = 100,
		step = 1
	} =  {}
	){
		for (var num = start; num <= max; num+=step) {
			yield num;
		}
	}
};

// use everything you learned today -  well know symbols, iterators, generators, etc.

// should print 0..100 by 1s
for (let num of numbers) {
	console.log(num);
}

// should print 6..30 by 4s
for (let num of numbers[Symbol.iterator]({start:6,max:30, step:4})) {
	console.log(num);
}

// one last thing
numbers.range = numbers[Symbol.iterator]

for (let num of numbers.range({start:6,max:30, step:4})) {
	console.log(num);
}

// more more thing
Number.prototype[Symbol.iterator] = function*(){
	for (var i=0; i<= this; i++){
		yield i;
	}
}
for (let v of 8) {
	console.log(v);
}
var range=[...8]
