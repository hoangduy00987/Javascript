function run(name, year_of_birth) {
	var d = new Date();
	var current_year = d.getFullYear()-5;
	var datas = new Object();
    datas.name = name;
    datas.year_of_birth = year_of_birth;
	datas.address = "Ha Noi";
    var age = current_year - year_of_birth;
	
	
	console.log(datas); // print object
	console.log(datas.name + " is " + age + " years old");
}
run("Duy",2003);


//assign function -> su dung de sao chepp phan tu vao object neu phan tu duoc them vao dda ton tai trong object truoc do thi no se duoc ghi de
function run(){
	var object1 = { foo: "bar", a: 5 };

	var object2 = {name: "foo", d: 10 };
	
	var object3 = Object.assign(object2,object1);
	
	console.log(object3);
}
//create function -> tao ra mot thuc the moi dua tren thuc the da cho truoc do
function run(name, job) {
	const person = {
	  name: "",
	  job: "",
	  printIntroduction: function () {
		console.log(`My name is ${this.name}. My job is ${this.job}`);
	  }
	};
	
	const me = Object.create(person);
    me.name = name;
    me.job = job;
	me.printIntroduction();
}

// entries -> tuong tu vong lap for in tra ve cac phan tu dem duoc
function run2() {
	var data = {firstName: 'Hieu',
		lastName: 'Bui'};
	var data1 =   Object.entries(data);
	console.log("hdsshdsidh___"+data1);
}
run2();
//key -> tra ve cac key cua object
function run() {
	var person  = {
		firstName:"Trung",
		lastName:"Vuong",
		age:50,
		eyeColor:"blue"
	};
	var key = Object.keys(person);
	console.log(key[0]);
    console.log(key[1]);
    console.log(key[2]);
    console.log(key[3]);
}
//value -> tra ve cac value cua object
function run() {
	var person  = {
		firstName:"Trung",
		lastName:"Vuong",
		age:50,
		eyeColor:"blue"
	};
	var value =  Object.values(person);
	console.log(value[0]);
    console.log(value[1]);
    console.log(value[2]);
    console.log(value[3]);
}