const about_nav = document.getElementById("about-nav");
const projects_nav = document.getElementById("projects-nav");
const contact_nav = document.getElementById("contact-nav");
const about_nav2 = document.getElementById("about-nav2");
const projects_nav2 = document.getElementById("projects-nav2");
const contact_nav2 = document.getElementById("contact-nav2");
const about_me = document.getElementById('about-me');
const projects = document.getElementById('projects');
const contacts = document.getElementById('contacts');
const download_cv = document.getElementById("download-cv");

function toNav(navId, id) {
    navId.addEventListener("click", () => {
        id.scrollIntoView({
            behavior: "smooth"
        });
    });
}
toNav(about_nav, about_me);
toNav(projects_nav, projects);
toNav(contact_nav, contacts);
toNav(about_nav2, about_me);
toNav(projects_nav2, projects);
toNav(contact_nav2, contacts);

document.getElementById("foodshop-github").onclick = () => window.open("https://github.com/SpartakVardanyan/foodshop", "_blank");
document.getElementById("foodshop-host").onclick = () => window.open("https://spartakvardanyan.github.io/foodshop/", "_blank");
document.getElementById("typingtest-github").onclick = () => window.open("https://github.com/SpartakVardanyan/typingtest", "_blank");
document.getElementById("typingtest-host").onclick = () => window.open("https://spartakvardanyan.github.io/typingtest/", "_blank");
document.getElementById("my-github").onclick = () => window.open("https://github.com/Spo-Cyber", "_blank");

download_cv.onclick = () => {
    const a = document.createElement("a");
    a.href = './CV/CV.pdf';
    a.download = "";
    a.style.display = "none";

    document.body.append(a);
    a.click();
    document.body.removeChild(a);
}