#pragma strict
var player : GameObject;
var offset : Vector3;
function Start () {

	this.player = GameObject.Find("Player");
	offset = transform.position - player.transform.position;
}

function Update () {
	transform.position = player.transform.position + offset;
}
