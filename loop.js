//for
function run2(n){
	var factorial = 1;
		
	for(i=1;i <= n; i++) {
		factorial *= i;
    }
	console.log(factorial);

}
// run(5);
//while
function run4(n){
	var output = "";
    let i = 2;
	while(i<=n) {
        if(i%2===0){
            output +=i;
            if(i+2<=n){
                output+=',';
            }
        }
        i++;
	}
	
	console.log(output);
}
//do while
function run3(n){
    let dem = 0;
    do{
        if(n%2==0){
            
            dem+=1;
            n/=2;
        }
        
    }while(n%2==0)
    console.log(dem);
}
run(8);
//for in
function run(){
	var person = {
		name: "Tuan Phong",
		age: 1,
		addr: "Ha Noi",
		is_boy: true
	};
    var i;
	for (i in person) {
	  console.log(`${i} is ${person[i]}`);
	}
}

// for of
function run1(datas){
	let sum = 0;
	for (const i of datas) {
		if(i>0){
            sum += i;
        }
	} 
	console.log(sum);
}
run1([1,2,3]);

function run(datas){
	for (const i of datas) {
        if (i%4==0 && i%3==0){
            break;
        }
		if (i%4==0) {
			continue;
		}

        console.log(i);
    }
}
run2([1, 3 , 4 , 6 , 12, 5, 4 , 9]);

function run(str_input) {
    let result = "";
	for(let i = str_input.length -1 ; i>=0; i--){
        result+=str_input[i];
    }
    console.log(result);
}
run7("hello");