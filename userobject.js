const employes={
    id:2,
    title:"Means wear",
    salary:124000,
    name:"Vjay",
    desigation:'java developer',
    techstack:[{
        plang:'java',
        server:'Apache Tomcat',
        database:'mysql',
        database2:'mogobd'
    },
    {
        plang:'python',
        server:'Django',
        database:'mysql',
        database2:'mogobd'
    },
    {
        plang:'reacts',
        server:'Apache Tomcat',
        database:'mysql',
        database2:'mogobd'
    }

  ] 
}
console.log(employes)

console.log(employes.id)
console.log(employes.techstack[0]);
console.log(employes.techstack[1].server);
console.log(employes.techstack[2].database);