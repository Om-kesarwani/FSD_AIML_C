const button = document.getElementById("showBtn");
const resume = document.getElementById("resume");

button.addEventListener("click", function () {

    resume.innerHTML = "";
    resume.style.border = "2px solid black";
    resume.style.padding = "20px";
    resume.style.width = "600px";
    resume.style.marginTop = "20px";

    const name = document.createElement("h1");
    name.innerText = "Om kesarwani";
    resume.appendChild(name);

    const contact = document.createElement("p");
    contact.innerText = "B.Tech CSE-AIML | ABES Engineering College";
    resume.appendChild(contact);

    const education = document.createElement("h2");
    education.innerText = "Education";
    resume.appendChild(education);

    const edu = document.createElement("p");
    edu.innerText = "B.Tech - CSE AIML";
    resume.appendChild(edu);

    const skills = document.createElement("h2");
    skills.innerText = "Skills";
    resume.appendChild(skills);

    const skillList = ["C++", "Java", "Python", "HTML", "JavaScript"];

    skillList.forEach(function(skill) {
        const item = document.createElement("p");
        item.innerText = "• " + skill;
        resume.appendChild(item);
    });

    const project = document.createElement("h2");
    project.innerText = "Projects";
    resume.appendChild(project);

    const projectName = document.createElement("p");
    projectName.innerText = "AI FaceSense";
    resume.appendChild(projectName);
});