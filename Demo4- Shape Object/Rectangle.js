class Rectangle extends Shape {
    constructor(color, isFilled, width, length) {
        super(color, isFilled); // ke thua tu phuong thuc cha
        this.width = width;
        this.length = length;
    }
    setWidth(width){
        this.width = width;
    }
    setLength(length){
        this.length = length;
    }
    getWidth(){
        return this.width;
    }
    getLength(){
        return this.length;
    }
    getArea () 
    {
        return this.width * this.length;
    }
    getPerimeter (){
        return 2 * ( this.width + this.length);
    }
    toString(){
        return "A Rectangle with width= " + this.width + " and length= " + this.length +  ", which is a subclass of " + super.toString();
    }

}