class bullet {
  constructor(xSpd, ySpd) {
    this.x = sprite.x;
    this.y = sprite.y;
    this.xSpd = 12 * xSpd;
    this.ySpd = 12 * ySpd;
  }

  dislay() {
    bulletspr = new Sprite();
    bulletspr.color = 'red';
    bulletspr.diameter = 20;
    bulletspr.layer = 1;
  }

  update() {
    this.x += this.xSpd;
		this.y += this.ySpd;
		this.xSpd *= 0.994;
		this.ySpd *= 0.994;
  }

}





