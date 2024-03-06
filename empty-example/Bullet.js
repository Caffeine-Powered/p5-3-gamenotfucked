class bullet {
  constructor(x, y, angle) {
    this.x = sprite.x;
    this.y = sprite.y;
    this.angle = angle;
    this.speed = 16;
  }

  draw() {
    push();
    bullet = new Sprite();
    bullet.diameter = 20;
    bullet.pos(this.x, this.y);
    pop();
  }

  update() {
    this.x += this.speed * cos(this.angle);
    this.y += this.speed * sin(this.angle);
  }

}





