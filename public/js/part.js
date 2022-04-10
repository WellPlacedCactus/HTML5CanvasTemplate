
class Part {

  constructor(x, y, wh, d, m) {
    this.x = x;
    this.y = y;
    this.wh = wh;
    this.d = d;
    this.m = m;
    this.t = new Timer(randint(50, 200));
    this.dd = 0.01 * rands();
  }

  tick() {
    this.x += Math.cos(this.d) * this.m;
    this.y += Math.sin(this.d) * this.m;

    this.d += this.dd;

    if (this.t.tick()) {
      this.d += Math.PI * Math.random() * rands();
    }

    if (
      this.x < 0 ||
      this.y < 0 ||
      this.x > innerWidth ||
      this.y > innerHeight) {
      this.d += Math.PI / 2;
    }
  }

  draw(c) {
    const a = this.x * 255 / innerWidth;
    const b = this.y * 255 / innerHeight;

    c.fillStyle = `rgb(${a}, ${b}, 255)`;
    c.fillRect(this.x, this.y, this.wh, this.wh);
  }
}