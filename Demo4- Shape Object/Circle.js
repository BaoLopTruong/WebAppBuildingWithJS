class Circle extends Shape {
    constructor(color, isFilled, radius) {
        super(color, isFilled); // ke thua tu phuong thuc cha
        this.radius = radius;
    }
    getArea () 
    {
        return Math.PI * this.radius * this.radius;
    }
    getPerimeter (){
        return Math.PI * this.radius * 2;
    }
    toString(){
        return "A Circle with radius=" + this.radius + ", which is a subclass of " + super.toString();
    }

}