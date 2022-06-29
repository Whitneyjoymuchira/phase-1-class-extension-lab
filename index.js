// Your code here
class Polygon {
    constructor(side){
        this.side = side 
        this.count = this.side.length
    }

    get countSides(){
        return this.side.length
    }

    get perimeter(){
        let sum= 0;
        if(!Array.isArray(this.side)) return;
        for (let i of this.side){
            sum +=i
        }
        return sum      
    }
}

class Triangle extends Polygon {
    get isValid(){
       for(let i = 0; i < this.countSides; i++){
        if(this.sides[i] + this.sides[i  + 1 ] <= this.sides[i + 2] || this.sides[i + 1] + this.sides[i  + 2 ] <= this.sides[i] || this.sides[i] + this.sides[i  + 2 ] <= this.sides[i + 1]) return false;
       }
       return true;
    }

}
class Square extends Polygon {
    get isValid(){
        for(let i = 0; i < this.countSides; i++){
            if(this.sides[i] === this.sides[i  + 1 ] && this.sides[i] === this.sides[i + 2] && this.sides[i] === this.sides[i + 3]) return true;
           }
           return false;
        }
        get area(){
            return this.sides[0] * this.sides[1]
        }
}



const newI = new Square([1,1,1,1]);
console.log(newI.isValid) 