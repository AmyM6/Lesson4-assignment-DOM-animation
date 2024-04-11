function decreaseWidth() {
let decreaseBtn = document.getElementById("rectangle").style.width;
let parsedWidth = parseInt(decreaseBtn);

parsedWidth -= 10;

document.getElementById("rectangle").style.width = parsedWidth + "px";
console.log(decreaseBtn);
}

decreaseBtn.addEventListener("click", decreaseWidth);


function increaseWidth(){
    let increaseBtn = document.getElementById("rectangle").style.width;
    parsedWidth = parseInt(increaseBtn);

    parsedWidth += 10;

    document.getElementById("rectangle").style.width = parsedWidth + "px";
    console.log(increaseBtn);
}

increaseBtn.addEventListener("click", increaseWidth);

