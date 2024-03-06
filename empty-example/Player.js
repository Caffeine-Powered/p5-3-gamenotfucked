
class Player {
  constructor() {
    this.pos = createVector(width / 2, height / 2);
    this.angle = 0;
  }

  display() {
    sprite = new Sprite();
    sprite.width = 50;
    sprite.height = 50;
    sprite.collider = 'kinematic';                    //other sprites don't effect player sprite

    for (let bullet of this.bullets) {
      bullet.update;
      bullet.draw;
    }

  }

  update(){
    this.angle = atan2(mouseY - this.pos.y, mouseX - this.pos.x);
  }

  move() {
    if (kb.pressing('left')) sprite.vel.x = -5;
    else if (kb.pressing('right')) sprite.vel.x = 5;
    else sprite.vel.x = 0;
    if (kb.pressing('up')) sprite.vel.y = -5;
    else if (kb.pressing('down')) sprite.vel.y = 5;
    else sprite.vel.y = 0;
  }



  fire() {
    this.bullets.push(new Bullet(this.pos.x, this.pos.y, this.angle));
  }
}