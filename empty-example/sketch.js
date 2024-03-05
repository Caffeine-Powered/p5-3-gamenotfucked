let sprite;
let cursor;
let bullet;
let gun;
let mainPlayer;




function setup() {
	new Canvas(800, 800);

  noCursor();
  mainPlayer = new Player;

  cursor = new Sprite();
  cursor.img = 'Assets/crosshair.png';
  cursor.diameter = 50;
  cursor.layer = 3;
  cursor.scale = 2;

  bullet = new Sprite();
  bullet.color = 'red';
  bullet.diameter = 20;
  bullet.layer = 1;
  bullet.mass = 1;

  gun = new Sprite(width/2,height/2,30,10);
  gun.color = 'green';
  gun.offset.x = 55;
  gun.layer = 4;

  mainPlayer.display();


  

}

function getMouseVector(){
	let mouseXalt = mouseX - sprite.x;
	let mouseYalt = mouseY - sprite.y;
	let mouseDir = createVector(mouseXalt, mouseYalt);
	mouseDir.normalize();
	return mouseDir;
}

function mousePressed(){
  let mouseVector = getMouseVector();
  console.log(mouseVector);
}


function draw() {

  clear();
  background(255);


  mainPlayer.move();


  cursor.position.x = mouseX;
  cursor.position.y = mouseY;
  cursor.overlaps(sprite);
  //cursor.overlaps(bullet);


  gun.overlaps(sprite);
  //gun.overlaps(bullet);
  gun.overlaps(cursor);
  gun.rotateTowards(mouse, 0.1, 0);
  gun.moveTowards(sprite,1,0);
}
