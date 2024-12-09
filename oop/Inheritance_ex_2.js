class Animal{
    speak(){
        console.log("Animal is speaking...");
    }
    eat(){
        console.log("Animal is eating..");
    }
}

class Cat extends Animal{
    speak(){
        super.speak();
        console.log("Meows");
    }

}
class Bird extends Animal{
    speak(){
        super.speak();
        console.log("Chirps");
    }
}

const cat = new Cat();
cat.speak();
const bird = new Bird();
bird.speak();