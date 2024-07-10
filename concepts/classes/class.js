class Animal{
    constructor(name , legs, speaks){
        this.name = name;
        this.legs = legs;
        this.speaks = speaks;
    }

    speak(){
        console.log("hi there " + this.speaks);
    }
}

let dog = new Animal("dog", 4 , bark);
dog.speak();