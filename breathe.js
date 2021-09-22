function myPlayFunction() {
    document.getElementById("breathe").style.animationPlayState = "running";
    document.getElementById("in").style.animationPlayState = "running";
    document.getElementById("ex").style.animationPlayState = "running";
    document.getElementById("stop").style.animationPlayState = "running";
}

function myPauseFunction() {
    document.getElementById("breathe").style.animationPlayState = "paused";
    document.getElementById("in").style.animationPlayState = "paused";
    document.getElementById("ex").style.animationPlayState = "paused";
    document.getElementById("stop").style.animationPlayState = "paused";
}