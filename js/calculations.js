function number(val){
document.getElementById("result").value+=val;

}
function answer(){
let calculation=document.getElementById("result").value;
let solve=eval(calculation);
document.getElementById("result").value=testNum(solve);
}
function testNum(solve) {
    
if (solve=="Infinity"){
    return'Cannot divide by zero';
}
else{
return solve;

}
}
function clr(){

document.getElementById("result").value="";


}
