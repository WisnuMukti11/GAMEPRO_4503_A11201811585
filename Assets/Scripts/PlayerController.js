#pragma strict

var speed : float = 10.0;
var  rb;
private var count : int ;
var countText : UI.Text; 
var winText : UI.Text; 
function Start () {
   rb = GetComponent('Rigidbody');
   SetCountText();
   winText.text = "";
 }
  function FixedUpdate () {
   var moveHorizontal = Input.GetAxis("Horizontal");
   var moveVertical = Input.GetAxis("Vertical");
   var movement = new Vector3(moveHorizontal, 0.0f, moveVertical);
  	  GetComponent.<Rigidbody>().AddForce(movement * speed);
 }
 function OnTriggerEnter(other: Collider){
 if (other.gameObject.CompareTag("Pick Up")){
 other.gameObject.SetActive(false);
 count= count + 1;
 SetCountText();
 }
 }

 function SetCountText(){
 countText.text = "Count   " + count.ToString();
 if (count >=10){
 winText.text = " You Win! ";
 }
 }
