//basic illustration of TweenMax's repeat, repeatDelay, yoyo and onRepeat
var box = document.getElementById("greenBox");
var tween = new TweenMax(
        box, 2, {
        left:"700px",
        repeat:-1,
        yoyo:true,
        onRepeat:onRepeat,
        repeatDelay:0.5,
        ease:Linear.easeNone,
        rotation: -360
    }
);

tween.timeScale(2);



function onRepeat() {
    TweenLite.set(box);
}