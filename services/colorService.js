class ColorService {
  constructor() {
    this.solution = [];
    this.colorPool = [
      "#e53935",
      "#1e88e5",
      "#43a047",
      "#fdd835",
      "#ce93d8",
      "#4dd0e1",
      "#ffa000",
      "#8e24aa"
    ];
  }
  getSolution() {
    let solution = [];
    for(let i=0; i<4; i++) {
      let color = Math.floor(Math.random() * this.colorPool.length);
      solution[i] = this.colorPool[color]
    }
    return solution
  }
  getColors() {
    return this.colorPool
  }
}

module.exports = ColorService;
