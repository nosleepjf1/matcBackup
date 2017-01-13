using UnityEngine;
using System.Collections;

public class testmove : MonoBehaviour {

	public Transform capsuleTransform;
	public Transform start;
	public Transform end;
	public float t;
	public float bendFactor = 1;
	public float speed;


	// Use this for initialization
	void Start () {
		capsuleTransform = gameObject.GetComponent<Transform>() as Transform;

	}
	
	// Update is called once per frame
	void Update () {
		t = Mathf.PingPong(Time.time * speed, 1f);

		Vector3 pos = capsuleTransform.position;

		pos.y = Mathf.Lerp(start.position.y, end.position.y, t);
		pos.x = (Mathf.Sin(t*Mathf.PI))*bendFactor;
		pos.z = Mathf.Lerp(start.position.z, end.position.z, t);

		capsuleTransform.position = pos;
	}
}
