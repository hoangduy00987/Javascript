function run(a, b, c){
	if(a>b && a>c){
	console.log("The greatest number is " + a);
    }else if(b > a && b > c){
	console.log("The greatest number is " +b);
    }else{
	console.log("The greatest number is " + c);

}
}

function run(year){
	if((year%4==0 && year &100 !=0) ||  (year % 4 == 0)){
	console.log(year + " is a leap year");
    }else {
	console.log(year + " is not a leap year");
}
}
