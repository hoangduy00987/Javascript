// function run(a, b){
// 	let dem_a = a.length;
//     let dem_b = b.length;
//     if(dem_a == dem_b){
//         return true;
//     }
//     return false;
// }

// function run(str){
//     var check = str.includes('script');
// 	console.log(check);
// }

function ucfirst(str) {
	var first_letter  = str.charAt(0).toUpperCase();
	var rest  = str.slice(1);
	var newstr = first_letter.concat(rest);
    return newstr;

}
function run(str) {
    var new_str = str.split(' ');
    var new_string ="";
	new_str.forEach(function(element){
        new_string += ucfirst(element)+" ";
        
    });
    console.log(new_string);
}
run("this is hello");
// console.log(ucfirst('hello'));

function run(str) {
    //var regex = /[aeios]/gi;
    // Chữ g trong 'gi' là notation để biết là global tức là tìm hết trong chuỗi,
    // Chữ i là insensitive tức là không phân biệt hoa thường
    var str = str.replace(/a/gi,'4');
    str = str.replace(/e/gi,'3');
    str = str.replace(/i/gi,'1');
    str = str.replace(/o/gi,'0');
    str = str.replace(/s/gi,'5');
    
    var end = str.trim();
    console.log(end);
    }

    function run() {
        var date = new Date();
        
        console.log(date.getFullYear() - 5 + "-" + (date.getMonth()) + "-" + (date.getDate()+16));
    }