/*****************Q1 ******************** */
var x=prompt("please enter number to reverse it: ");

function reversee(x){

    return x.split("").reverse().join("");
    
}

alert(reversee(x));

/********************Q2 ****************** */

for(var i=0; i<=15; i++){
 
    if(i%2 == 0){
        console.log(i + " even");
    }else{
        console.log(i + " odd")
    }
}

/******************Q3 ******************* */

var name = prompt("Please enter string to rearrange alphabetically: ");

function alphabetical_order(y){
   return y.split("").sort().join("");
} 

alert(alphabetical_order(name));

/*******************Q4 ***************** */

var number = prompt("Please enter a number to format: ");

function evenNum(inout){
   var num = " ";
    for(var x=0; x < inout.length; x++ ){

        if( inout[x]%2 == 0 && inout[x+1]%2 == 0){
            num += inout[x] + "-";
        }else{
            num += inout[x];
        }
        
    }
    return num;
}
alert(evenNum(number));
/********************Q5 ********************** */

var age = parseFloat(prompt("please enter your age: "));

function Agechecker(age){

    (age >= 18) ? alert(" The user is Adult") : alert("The user is Minor");
    

}

Agechecker(age);