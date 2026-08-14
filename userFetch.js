const div=document.getElementById('container')
const button=document.getElementById('btn')
console.log(div);
function display(){
div.innerHTML='<h2> hello Using DOM </h2>';
 const serverdata=fetch('https://fakestoreapi.com/products/1');
 //console.log(serverdata)
//  const jsonData = await serverdata.json();

//     console.log(jsonData.title);
        
}
button.addEventListener('click',display);