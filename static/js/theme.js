const saveTheme = localStorage.getItem("theme")

if(saveTheme === "light") {
    document.body.classList.add("light-mode")
}else{
    document.body.classList.remove("light-mode")
}

if(saveTheme === "light") {
    line.style.left = "36px"
}else{
    line.style.left = "0"
}