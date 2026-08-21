// Get the button using DOM
let generateBtn = document.getElementById("generateBtn");

// Add click event
generateBtn.addEventListener("click", function () {

    // Get values from input fields
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;

    let objective = document.getElementById("objective").value;
    let education = document.getElementById("education").value;
    let skills = document.getElementById("skills").value;
    let projects = document.getElementById("projects").value;
    let experience = document.getElementById("experience").value;


    // Put input values into resume
    document.getElementById("resumeName").textContent = name;

    document.getElementById("resumeContact").textContent =
        email + " | " + phone + " | " + address;

    document.getElementById("resumeObjective").textContent =
        objective;

    document.getElementById("resumeEducation").textContent =
        education;

    document.getElementById("resumeSkills").textContent =
        skills;

    document.getElementById("resumeProjects").textContent =
        projects;

    document.getElementById("resumeExperience").textContent =
        experience;
});