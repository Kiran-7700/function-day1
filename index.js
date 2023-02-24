// Que 1
function one(){
    console.log("Hello my friends")
}
one();

//Que 2
function two(a,b){
    console.log(a+b)
}
two(3,4)

//Que3
kiran=()=>{
    console.log("Hello World")
}
kiran();


//Que4
var x = 21;
 var girl = function () {
   console.log(x);
   var x = 20;
  };
   girl ();




//Que5
var x=21;
girl();
console.log(x);
function girl(){
  console.log(x);
  var x=20;
}
//Que6

var x=21;
a();
b();
function a(){
  x=20;
  console.log(x);
};
function b(){
  x=40;
  console.log(x)
}


//Que7

function factorial(n){
    let prod=1;
     for (let i=1; i<=n; i++){
        prod=prod*i;
     }  
     console.log(prod) 
};
factorial(10);

