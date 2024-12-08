function run() {
	var data = [25, 154, 461, 67, 32, 43]; // define an array
	
	var length = data.length; // get length of array datas
	
	console.log(data.length); // output: 6
	
	data.push(length); // Add new element to datas
	
	console.log(data.length); // output: 7
}
run1();

//concat
function run4(a, b){
	var b1 = b.concat(a);
	console.log(b1);
}

// //every -> kiem tra xem thu cac phan tu trong mang co vuot qua dieu kien cua hham hay khong
function check(data){
    return data % 2 ==0;
}

function run3(data) {
	var data = data.every(check);
	if (data) {
		console.log("Yes");
	} else {
		console.log("No");
	}
}
run3([2,4,8,6]);

//some -> kiem tra xem thu co it nhat 1 phan tu vuot qua dieu kien cua ham hay k


function run1(data) {
	var data = data.some(check);
	if (data) {
		console.log("Yes");
	} else {
		console.log("No");
	}
}
run1([1,1,3,5])

//filter -> loc cac phan tu vuot qua duoc dieu kien cua ham
function  check(data){
    return data > 0;
}
function run(data) {
	var ch = data.filter(check);
	console.log(ch)
}

// find -> tra ve gia tri cua phan tu dau tien thoa man dieu kien cua ham
// findIndex -> tra ve vi tri cua phan tu dau tien thoa man dieu kien cua ham

function check(data){
    return data > 0;
}

function run (data) {
	var value =  data.find(check);
	var index =  data.findIndex(check);
	if(index==-1){
        console.log("No result");
    }else{
        console.log(index,value);
    }

}

//foreach --> su dung de thuc thi hanh dong cu the trenn tung phan tu
function run(data) {
	data.forEach(function(element) {
		if(element % 5 ==0){
            console.log(element);
        }
	});
}

// includes -> method determines whether an array includes a certain value among its entries
// returning true or false as appropriate
function run(data){
	let check = data.includes(5);
	if(check){
		console.log("yes");
	}else{
		console.log("No");
	}
}

run([1,2,5])

// indexOf -> method return the first index at which a given element can be found in the array or -1 if isn't present
// lastIndexOf() ->method returns the last index at which a given element can be found in the array or -1 if isn't present

function run(data){
	let firstIndex =  data.indexOf(2);
	let lastIndex =  data.lastIndexOf(2);
    if(firstIndex == -1 || lastIndex == -1){
        console.log("No result");
    }else{
        console.log(firstIndex,lastIndex)
    }
	
}

//join -> method creates and return a new string by concatenating all of the 
// element in an array (or an array-likee object). separated by commas or specified spearator string . if the array has only one item
// thn that item will be returned without using the separator
function run(data) {
	let join = data.join(', ')
	console.log(join);
}

//map -> method cretaes a new array with the results of calling
// a provided function on every element in the calling array

function absolute_value(data){
    return  data < 0 ? data * -1 : data;
}
function run(data) {
	let num = data.map(absolute_value);
	console.log(num);
}


function run(data) {
	let num = data.map(dt => dt<0 ? dt *-1 : dt);
	console.log(num);
}

//shift -> method removes the first element from an array and return that removed element.
// this method changes the length of the array
//unshift -> method adds one or more elements to the begining of an array and return the new length of the array
///pop -> method removes the last element from an array and returns thhat element
// this method changes the length of the array
//push -> method adds one or more elements to the end of an array and returns the new length of the array

function run(data) {
	data.shift();
	data.pop();
	data.push("X");
	console.log(data);
}

//reverse -> method reverses an array in place. Thee first array element becoms the last, and the last array element become the first

function run(data){
	let new_array = data.reverse();
	console.log(new_array)
}

// sort

function run(data) {
	data.sort();
	console.log(data);
	}
run([3,4,2,6]);