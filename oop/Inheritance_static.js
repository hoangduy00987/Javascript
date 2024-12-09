class MathUtils{
    static add(a,b){
        return a + b;
    }

}

class AdvancedMath extends MathUtils{
    static mutiply(a,b){
        return a * b;
    }
}


console.log(AdvancedMath.add(3,5));
console.log(AdvancedMath.mutiply(3,5));