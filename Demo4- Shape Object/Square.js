class Square extends Rectangle {
    constructor( color, isFilled,  side ) {
        super(color, isFilled, side, side ); // ke thua tu phuong thuc cha
        this.side = side;
    }
    // setWidth(side);
    // setLength(side);

    getSide(){
        return getWidth();
    }

    setSide(){
        setWidth(side);
        setLength(side);
    }

    setWidth(width){
        setSide(width);
    }

    setLength(length){
        setLength(length);
    }

    getArea () 
    {
        return this.side * this.side;
    }
    getPerimeter (){
        return 4 * this.side;
    }
    toString(){
        return "A Square with side=" + this.side +  ", which is a subclass of " + super.toString();
    }

}