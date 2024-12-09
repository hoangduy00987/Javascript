class Person{
    constructor(name){
        this.name = name;
    }
    introduce(){
        console.log(`Hello my name is ${this.name} `);
    }

}

class Student extends Person{
    constructor(name,grade){
        super(name);
        this.grade = grade;
    }
    introduce(){

        super.introduce();
        console.log(`and I am in grade ${this.grade}`);
    }
}
const student = new Student("Duy","21TCLC_DT3");
student.introduce();