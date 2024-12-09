const Person =  {
    name : "Duy", // thuoc tinh
    age : 21,
    greet: function(){// phuong thuc
        console.log(`Hello my name is ${this.name}`);
    }
};

Person.greet();

// constructor function
function person(name,age){
    this.name = name;
    this.age = age;

}

const join =  new person("Duy",21);
console.log(join.name);


// classes

class person1{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log(`Hello my name is ${this.name}. I'm ${this.age} years old.`);
    }

}

const duy = new person1("Duy", 21);
duy.greet();