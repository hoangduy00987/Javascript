class Vehicle{
    constructor(brand){
        this.brand = brand;
    }
    describe(){
        console.log(this.brand);
    }
};
class Car extends Vehicle{
    constructor(brand,model){
        super(brand);
        this.model = model;
    }
    print(){
        super.describe();
        console.log(this.model);
    }
    
};

const car = new Car("CAR","BMW");
car.print();