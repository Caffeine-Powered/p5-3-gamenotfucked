let sprite;
let cursor;
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

  gun = new Sprite(width / 2, height / 2, 30, 10);
  gun.color = 'green';
  gun.offset.x = 55;
  gun.layer = 4;

  mainPlayer.display();

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
  gun.moveTowards(sprite, 1, 0);

}

function mousePressed(){
  Player.fire()
  console.log("Clicked");
}

