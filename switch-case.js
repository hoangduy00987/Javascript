// function run(the_number) {
// 	var day_of_week_name = '';
//     switch (the_number) {
//         case 0:
//             day_of_week_name = "Sunday";
//             break;
//         case 1:
//             day_of_week_name = "Monday";
//             break;
//         case 2:
//             day_of_week_name = "Tuesday";
//             break;
//         case 3:
//             day_of_week_name = "Wednesday";
//             break;
//         case 4:
//             day_of_week_name = "Thursday";
//             break;
//         case 5:
//             day_of_week_name = "Friday";
//             break;
//         case 6:
//             day_of_week_name = 'Saturday';
//             break;
//     }
//     console.log(day_of_week_name);
// }
// run(2);

// function run(physics, chemistry, biology, mathematics, computer){
// 	var percentage = ((physics + chemistry+ biology + mathematics  +computer) / 50) * 100;
// 	var sz_grade = "";
	
// 	if(percentage >= 90){
//         sz_grade = "Grade A";
//     }else if(percentage >= 80){
//         sz_grade = "Grade B";
//     }else if(percentage >= 70){
//         sz_grade = "Grade C";
//     }else if(percentage >= 60){
//         sz_grade = "Grade D";
//     }else if(percentage >= 40){
//         sz_grade = "Grade E";
//     }else if(percentage < 40){
//         sz_grade = "Grade F";
//     }
	
// 	console.log(sz_grade);
// }
function run(a, b, c, d){
    var arr = [a, b, c, d];
    
    for (var i = 0; i < arr.length - 1; i++) {
    for (var j = 0; j < arr.length - i - 1; j++) {
    if (arr[j] < arr[j + 1]) {
    var temp = arr[j];
    arr[j] = arr[j + 1];
    arr[j + 1] = temp;
    }
    }
    }
    
    var sorted_str = arr.join(',');
    
    console.log(sorted_str);
    }
run(12,-2,3,6);