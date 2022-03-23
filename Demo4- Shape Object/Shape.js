class Shape {
    constructor(color, isFilled = null) {
        this.color = color;
        this.isFilled = isFilled == null ? false : true;
    }

    toString() {
        return "A shape with color of " + this.color + " and " + (this.isFilled ? "filled" : "not filled");
    }
}
