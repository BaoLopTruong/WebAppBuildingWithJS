class Shape {
    constructor(color, isFilled = null) {
        this.color = color;
        this.isFilled = isFilled == null ? false : true;
    }

    toString() {
        return "A shape with color of " + this.color + " and " + (this.isFilled ? "filled" : "not filled");
    }
}
class Circle extends Shape {
    constructor(color, isFilled, radius) {
        super(color, isFilled); // ke thua tu phuong thuc cha
        this.radius = radius;
    }
}