let sprite;
let cursor;
let bullet;
let gun;




function setup() {
	new Canvas(800, 800);
  noCursor();

	sprite = new Sprite();
	sprite.width = 50;
	sprite.height = 50;

  cursor = new Sprite();
  cursor.img = 'Assets/crosshair.png';
  cursor.diameter = 50;
  cursor.layer = 3;
  cursor.scale = 2;

  /**bullet = new Sprite();
  bullet.color = 'red';
  bullet.diameter = 20;
  bullet.layer = 1;**/

  gun = new Sprite(width/2,height/2,30,10);
  gun.color = 'green';
  gun.offset.x = 55;
  gun.layer = 4;


  

}


function draw() {
  clear();
  background(255);

  if (kb.pressing('left')) sprite.vel.x = -5;
  else if (kb.pressing('right')) sprite.vel.x = 5;
  else sprite.vel.x = 0;
  if (kb.pressing('up')) sprite.vel.y = -5;
  else if (kb.pressing('down')) sprite.vel.y = 5;
  else sprite.vel.y = 0;

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
