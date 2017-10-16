//basic illustration of TweenMax's repeat, repeatDelay, yoyo and onRepeat
var box = document.getElementById("greenBox");
var tween = new TweenMax(
        box, 2, {
        left:"700px",
        repeat: -1,
        yoyo:true,
        onRepeat:onRepeat,
        repeatDelay:0.5,
        ease:Linear.ease,
        rotation: 360
    }
);






function onRepeat() {
    TweenLite.set(box);
}