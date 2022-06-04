
class Timer {

  constructor() {
    this.t = 0;
  }

  tick(cd) {
    this.t += 1;
    if (this.t > cd) {
      this.t = 0;
      return true;
    } else {
      return false;
    }
  }
}