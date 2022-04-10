
class Timer {

  constructor(cd) {
    this.cd = cd;
    this.t = 0;
  }

  tick() {
    this.t += 1;
    if (this.t > this.cd) {
      this.t = 0;
      return true;
    } else {
      return false;
    }
  }
}