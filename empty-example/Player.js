
class Player {
  constructor() {

  }

  display() {
    sprite = new Sprite();
    sprite.width = 50;
    sprite.height = 50;
    sprite.collider = 'kinematic';                    //other sprites don't effect player sprite
  }

  move() {
    if (kb.pressing('left')) sprite.vel.x = -5;
    else if (kb.pressing('right')) sprite.vel.x = 5;
    else sprite.vel.x = 0;
    if (kb.pressing('up')) sprite.vel.y = -5;
    else if (kb.pressing('down')) sprite.vel.y = 5;
    else sprite.vel.y = 0;
  }
}