function onRepeat(){TweenLite.set(box)}var box=document.getElementById("greenBox"),tween=new TweenMax(box,2,{left:"700px",repeat:-1,yoyo:!0,onRepeat:onRepeat,repeatDelay:.5,ease:Linear.ease,rotation:360});