class Animal {
    constructor(name, favoriteFood) {
        this.name = name;
        this.favoriteFood = favoriteFood;
        animalPopulation++;
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
    static getPopulation() {
        return animalPopulation;
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
    constructor(name, food){
        super(name, "marshmellows");
    }
    // eat(food){
    //     if (food == this.favoriteFood){
    //         console.log("YUM!! " + this.name + " wants more " + food);
    //     }else {
    //         super.eat(food);
    //     }
    //}
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
            console.log("YUCK ! ! !" + this.name + " will not eat " + food);
        }
    }
   sleep(){
        console.log(this.name + "sleep for 8 hours");
   }
}
class Bee extends Animal{
    constructor(name, food) {
        super(name, "pollen");
    }
    eat(food) {
        if (food == this.favoriteFood) {
            super.eat("pollen")
        } else {
            console.log("YUCK ! ! !" + this.name + " will not eat " + food);
        }
    }
    sleep(){
        console.log(this.name + " never sleeps");
    }
}
class ZooKeeper {
    constructor(name) {
        this.name = name;
    }

    feedAnimals(animals, food) {
        console.log(this.name + " is feeding " + food + " to " + animals.length + " of " + animalPopulation + " total animals");

        for (var i = 0; i > animals.length; i++) {
            animals[i].eat(food);
        }
    }
}

var animalPopulation = 0;
function run() {
    var animals=["Tigger" , "Pooh" , "Gemma" , "Rarity" , "Stinger"];
    var tigger = new Tiger("Tigger");
    tigger.eat("meat");
    var pooh = new Bear("Pooh");
    pooh.eat("fish");
    pooh.eat("meat");
    var rarity = new Unicorn("Rarity");
    rarity.eat("marshmellows");
    rarity.sleep();
    var giraffe = new Giraffe("Gemma");
    giraffe.eat("meat");
    giraffe.eat("leaves");
    giraffe.sleep();
    var bee = new Bee("Stinger");
    bee.eat("ice cream");
    bee.eat("pollen");
    bee.sleep();
    var zoebot = new ZooKeeper("Zoebot");
    zoebot.feedAnimals(animals, "lean");
    Animal.getPopulation();

}
