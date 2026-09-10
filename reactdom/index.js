const container=document.getElementById('container');
const root=ReactDOM.createRoot(container);
const h2=React.createElement('h2',{style:{color:'red'}},"Name: Rahul Kumar");
const h21=React.createElement('h2',{style:{color:'red'}},"Roll: 254545");
const h1=React.createElement('h2',{style:{color:'white',background:'brown'}},"ABES");
const img=React.createElement('img',{src:'https://images.rawpixel.com/image_png_800'});
const div=React.createElement('div',{style:{border:'4px solid red',width:'300px',height:'100px'}},h2,h21,h1,img);
root.render(div);