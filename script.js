const navToggle=document.getElementById("navToggle");
const navLinks=document.getElementById(".nav-links");

navToggle.addEventListener("click", ()=>{
    navLinks.classList.toggle("active");
});

const section=document.querySelectorAll(".fade-in");

const observer=new IntersectionObserver((entries) =>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    })
},{
    threshold: 0.2
});

const sections = document.querySelectorAll(".fade-in");

SpeechRecognitionResult.forEach((section)=>{
    observer.observe(section);
});