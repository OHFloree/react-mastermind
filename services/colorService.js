 module.exports = class ColorService {
    constructor() {
        this.colors = [
            '#e53935',  //RED
            '#1e88e5',  //BLUE
            '#43a047',  //GREEN
            '#fdd835',  //YELLOW
            '#fb8c00',  //ORANGE
            '#8e24aa',  //PURPLE
        ]
    }

    async getAllColors() {
        return this.colors
    }
}