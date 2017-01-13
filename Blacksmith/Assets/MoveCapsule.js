#pragma strict
public var capsule : GameObject;
function Awake(){
capsule = GameObject.Find("Capsule");
}

function OnMouseDown(){
var absolute = 0.0;
absolute = capsule.transform.position.z;
if(absolute < 0){
absolute = capsule.transform.position.z * -1.0;
}
Debug.Log(absolute);
  if(absolute < 0.1){
    Debug.Log("Legendary Craftsmanship");
  }
  else if(absolute < 0.2){
    Debug.Log("Rare Craftsmanship");
  }
  else if(absolute < 0.3){
    Debug.Log("Good Craftsmanship");
  }
  else if(absolute < 0.5){
    Debug.Log("Mediocre Craftsmanship");
  }
  else if(absolute < 1){
    Debug.Log("Shoddy Craftsmanship");
  }
  else {
    Debug.Log("terrible Craftsmanship");
  }
}