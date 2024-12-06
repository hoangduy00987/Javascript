let  d = "duy";
d = "hoang";
console.log(d);

let a,b,c;
a = b = c = "Duy";
console.log(a);
console.log(b);
console.log(c);

// function run(a, b){
//     console.log("a == b is " +(a == b))
//     console.log("a != b is " +(a != b))
//     console.log("a > b is " +(a > b))
//     console.log("a < b is " +(a < b))
//     console.log("b >= a is " +(b >= a))
//     console.log("b <= a is " +(b <= a))

// }
// run(10,11)

// function run1(a, b) {
// 	console.log("((a%2 == 0) && (b%2 == 0)) is " + ((a%2 == 0) && (b%2 == 0))); 
// 	console.log("((a%2 == 0) || (b%2 == 0)) is " + ((a%2 == 0) || (b%2 == 0)));
//     console.log("(!(a > b) is " + !(a>b));
// }
// run1(20, 11);

function run(a) {
	a = a * 2; 
	console.log(a);

	a = a + 9; 
	console.log(a);

	a = a - 4;
	console.log(a);

	a = a / 3;
	console.log(a);

	a = a % 3;
	console.log(a);
}
run(5);

function display_result(sum) {
	console.log('sum is ' + sum);
}
function add_two_numbers(callback, a, b) {
	var sum = a + b;
    // callback function
    callback(sum);
    
}

function run() {
	var a = 5;
	var b = 7;
	add_two_numbers(display_result, a, b);
}