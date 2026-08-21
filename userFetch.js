// const div=document.getElementById('container')
// const button=document.getElementById('btn')
// console.log(div);
// function display(){
// div.innerHTML='<h2> hello Using DOM </h2>';
//  const serverdata=fetch('https://fakestoreapi.com/products/1');
//  //console.log(serverdata)
// //  const jsonData = await serverdata.json();

// //     console.log(jsonData.title);
        
// }
// button.addEventListener('click',display);







const div = document.getElementById('container')
const button = document.getElementById('btn')
//console.log(div);
const h2=document.createElement('h2');
h2.innerText="Data is Loading...";

console.log(h2);

function cart(ele){
    alert("cart is calling"+ele)
}

async function display(){
    try{
// div.innerHTML='<h2>Hello Using DOM<h2>';
div.appendChild(h2);
const serverdata=await fetch('https://fakestoreapi.com/products')
//fetch('https://fakestoreapi.com/');
const jsonData = await serverdata.json();
//console.log(jsonData[1].title)
//div.innerHTML=<h2 style=color:green>$(JSON.stringify(jsonData))</h2>;

let table=`<table border=4px>
<tr><th>Image</th><th>Item_Id</th><Item_Title</th><th>Item_Price</th></tr>
${
    jsonData.map((ele)=>(
        `<tr>
        <td><img src=${ele.image} height=200 width=200/></td>
        <td>${ele.id}</td>
        <td>${ele.title}</td>
        <td>${ele.price}</td>
        <td><button onclick=cart(ele.id)>Add to card</button></td>
        </tr>`
    ))
}
</table>`
div.innerHTML=table;
 }catch(e){
    console.log("Error is:"+e);
 }
 finally{
    if(div.contains(h2)){
        div.removeChild(h2);
    }
 }
}
button.addEventListener('click',display);