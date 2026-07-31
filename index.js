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



// function login(msg,error){
//     if(error){
//         console.log("Error is "+error);
//     }
//     else{
//         console.log("Welcom "+msg)
//     }
// }
// function loginVerification(username,password,clbk){
//     if(username=="ptomer40"&&password=="123456"){
//         clbk("Success",null);
//     }
//     else{
//         clbk(null,"Username or password is incorrect")
//     }
// }
// loginVerification("ptomer40","123456",login);

// function RandomNumber(num){


// }

// function result(msg, error) {
//     if (error) {
//         console.log("Error: " + error);
//     } else {
//         console.log(msg);
//     }
// }

// function checkEvenOdd(clbk) {
//      const num = Math.floor(Math.random() * 100) + 1;

//     console.log("Random Number = " + num);

//     if (num % 2 === 0) {
//        clbk(num + " is Even", null);
//     } else {
//         clbk(num + " is Odd", null);
//     }
// }

// checkEvenOdd(result);


//console.log("firet");
//setTimeout(()=>{console.log("second")},1000);
// for(i=0;i<1000;i++){
//     console.log("second");
// }
//console.log("thired");




//timeout
// setTimeout(()=>{
//     setTimeout(()=>{
//         setTimeout(()=>{
//             setTimeout(()=>{
//                 setTimeout(()=>{
//                     setTimeout(()=>{
//                         setTimeout(()=>{
//                             setTimeout(()=>{
//                                 setTimeout(()=>{
//                                     setTimeout(()=>{

//                                     console.log("1")},1000)
//                                 console.log("2")},1000)
//                             console.log("3")},1000)
//                         console.log("4")},1000)
//                     console.log("5")},1000)
//                 console.log("6")},1000)
//             console.log("7")},1000)
//         console.log("8")},1000)
//     console.log("9")},1000)
// console.log("10")},1000)




//promises
// const myPromise=new Promise((resolve,reject)=>{
// username="ptomer40";
// password="1234";
// if(username=="ptomer40" && password=="1234"){
//     resolve("success")
// }
// else{
//     reject("username or password is incorrect")
// }
// })
// myPromise.then((msg)=>{
//     console.log(msg)
// }).catch((msg)=>{
//     console.log(msg)
// }).finally(()=>{
//     console.log("All resource have been closed/memory released")
// })


//async awit function
async function handlelogin(){
    try{
        await myPromise
    }catch(e){
        console.log(e)
    }finally{
        console.log("All resource have been  released")
    }
}
handlelogin();
