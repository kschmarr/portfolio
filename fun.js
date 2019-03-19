$(launch);

function launch(){
{/* <script type="text/paperscript" canvas="myCanvas"> */}
  
  var circles = [];

  function onKeyDown(event) {
    var maxPoint = new Point(view.size.width, view.size.height);
    var randPoint = Point.random();
    var point = maxPoint * randPoint;
    var newCircle = new Path.Circle(point, (Math.random()*50));
    newCircle.fillColor = "orange";
    circles.push(newCircle);
  }

  var animatedCircle = new Path.Circle(new Point(300,300), 100)
  animatedCircle.fillColor = "red";

  function onFrame(event){
    for(var i = 0; i < circles.length; i++) {
      circles[i].fillColor.hue += 1;
    }
    animatedCircle.fillColor.hue += 1;
    animatedCircle.scale(.9);
  }
}
  // </script>