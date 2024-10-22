const buttons = document.querySelectorAll(".button")
buttons.forEach(button => {
    button.addEventListener("click", () => {
        button.style.transform= "scale(0.85)";
        setTimeout(() => {
            button.style.transform= "scale(1)";
        }, 200); // Function will execute after 200 ms
    });
    
});
console.log(buttons);