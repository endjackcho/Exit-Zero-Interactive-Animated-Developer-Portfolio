document.querySelectorAll(".btna").forEach((btn) => {
btn.addEventListener("mousemove", (e) => {
    const rect = btn.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    btn.style.transform = `translate(${x * 1}px, ${y * 1}px)`;
});
btn.addEventListener("mouseleave", () => {
    btn.style.transform = "translate(0,0)";
});
});

const reveals = document.querySelectorAll(".reveal")
const  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("active")
        }
    })
},{threshold:0.25
})
reveals.forEach((item) => {
    observer.observe(item)
})


const cards = document.querySelectorAll(".card");
cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
        rect = card.getBoundingClientRect();

        let xx = e.clientX - rect.left ;
        let yy = e.clientY - rect.top;

        card.style.setProperty("--x", xx + "px");
        card.style.setProperty("--y", yy + "px");
    })
})

const seem = document.querySelector(".welc")
const arr = document.querySelector(".arrow")
const obsrv = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            arr.style.opacity = "0"
        }else{
            arr.style.opacity = "1"
        }
    });
});
obsrv.observe(seem)

const heade = document.querySelector("header")
const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            heade.classList.remove("blurr")
        }else{
            heade.classList.add("blurr")
        }
    });
});

obs.observe(seem)

let line = document.querySelector(".line_bot")
let dark = document.querySelector(".dark")
let light = document.querySelector(".light")
light.addEventListener("click",lightMod)
dark.addEventListener("click", darkMode)

function lightMod(){
    let body = document.getElementById("body")
    body.classList.add("light-mode")
    line.style.left = "36px"
    localStorage.setItem("theme", "light")
}

function darkMode(){
    body.classList.remove("light-mode")
    line.style.left = "0"
    localStorage.setItem("theme", "dark")
}