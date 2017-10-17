var fish = document.getElementById("yellowFish");

TweenMax.to(fish, 4, {
    left:900,
    rotationY: 160,
    top:"50%",
    rotation: -90,
    ease:Back.easeIn,
    repeat: -1,
    yoyo:true,
    repeatDelay:0.1
});

