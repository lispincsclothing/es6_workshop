const x = 3;
// x = 4;//error

const y = [1,2,3];
// y = 4 //still error

y[0]= 4; //but can do this

// so use object.freeze
const y = Object.freeze([1,2,3]);
