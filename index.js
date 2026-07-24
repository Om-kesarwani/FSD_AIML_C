// function sum(a,b){
//     return a+b;
// }
// const result=sum(20,30);
// console.log("sum is = "+result);

// function sumWithMsg(clbk,msg){
//     const result=clbk(20,40);
//     console.log(msg+":"+result);
// }
// sumWithMsg(sum,"Hey using calcutaion with js");

function login(msg,error){
    if(error){
        console.log("Error is "+error);
    }
    else{
        console.log("Welcom "+msg)
    }
}
function loginVerification(username,password,clbk){
    if(username=="ptomer40"&&password=="123456"){
        clbk("Success",null);
    }
    else{
        clbk(null,"Username or password is incorrect")
    }
}
loginVerification("ptomer40","123456",login);

function RandomNumber(num){


}

function result(msg, error) {
    if (error) {
        console.log("Error: " + error);
    } else {
        console.log(msg);
    }
}

function checkEvenOdd(clbk) {
     const num = Math.floor(Math.random() * 100) + 1;

    console.log("Random Number = " + num);

    if (num % 2 === 0) {
       clbk(num + " is Even", null);
    } else {
        clbk(num + " is Odd", null);
    }
}

checkEvenOdd(result);