class ColorService {
  constructor() {
    this.solution = [];
    this.colorPool = [
      "FF0000",
      "00FF00",
      "0000FF",
      "FFFF00",
      "00FFFF",
      "FF00FF",
      "FF9B00",
      "216621"
    ];
  }
  getSolution(n) {
    let solution = [];
    for(let i=0; i<4; i++) {
      let color = Math.floor(Math.random() * n);
      solution[i] = this.colorPool[color]
    }
    return solution
  }
  getColors() {
    return this.colorPool
  }
}

module.exports = ColorService;
