class Animal {
    constructor(name, favoriteFood) {
        this.name = name;
        this.favoriteFood = favoriteFood;
    }
    sleep() {
        console.log(this.name + " sleeps for 8 hours");
    }
    eat(food) {
        console.log(this.name + " eats " + food);
        if (food == this.favoriteFood) {
            console.log("YUM!!! " + this.name + " wants more " + food);
        } else {
            if(food != this.favoriteFood){
                this.sleep();
            }
        }
    }
}

class Tiger extends Animal {
    constructor(name, food) {
        super(name, "meat");
    }

    sleep() {
        console.log(this.name + "sleeps for 8 hours.");
    }

    eat(food) {
        console.log(this.name + " eats " + food);
        if (food == this.favoriteFood) {
            console.log("YUM!! " + this.name + " wants more " + food);
        } else {
            if (this.favoriteFood != food) {
                this.sleep();
            }
        }
    }
}


class Bear extends Animal {
    constructor(name, food) {
        super(name, "fish");
    }

    sleep() {
        console.log(this.name + " hibernates for 4 months");
    }
}
class Unicorn extends Animal{
    constructor(name){
        super(name, "marshmallows");
    }
    sleep(){
        console.log(this.name + " sleeps on cloud 9");
    }

}
class Giraffe extends Animal {
    constructor(name, food) {
        super(name, "leaves");
    }
    eat(food) {
        if (food == this.favoriteFood) {
            super.eat("leaves")
        } else {
            console.log("YUCK ! ! !" + this.name + "will not eat meat");
        }
    }
}


function run() {
    var tigger = new Tiger("Tigger");
    tigger.eat("meat");
    var pooh = new Bear("Pooh");
    pooh.eat("fish");
    pooh.eat("meat");
    var rarity = new Unicorn("Rarity");
    rarity.eat("marshmellows");
    var giraffe = new Giraffe("Gemma");
    giraffe.eat("leaves");
}
