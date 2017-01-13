#pragma strict
var myColor = Color(0.8,0.4,0.4);
public var mySphere : GameObject;
public var changeColor = 0.8;
function Start () {
mySphere.GetComponent.<Renderer>().Material.Color = myColor;
}

function Update () {
//changeColor -= .01;
//myColor = Color(changeColor,0.4,0.4);
}