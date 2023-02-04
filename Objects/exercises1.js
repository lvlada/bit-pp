//1

class Car{
    constructor(brand, model, motion){
        this.brand = brand;
        this.model = model;
        this.motion = motion;
    }

    checkMotion(){
        if(this.motion > 0){
            return 'car is moving';
        } else{
            return `car is not moving`;
        }
    }

    accelerate(increase){
        this.motion = this.motion + increase;
    }

    break(decrease){
        this.motion = this.motion - decrease
        if(this.motion < 0){
            this.motion = 0
        }

    }

    statusMethod(){
        return `${this.brand} is running at ${this.motion}km/h, ${this.checkMotion()}`;
    }

    stopCar(){
        this.motion = 0;
    }
}


var car1 = new Car('Reno', 'Megan', 100);
var car2 = new Car('Volkswagen', 'Golf 2', 60);
var car3 = new Car('Honda', 'Civik', 120);

console.log(car1.statusMethod());
car1.accelerate(10);
car1.break(50);
console.log(car1.statusMethod());

//2

class TV{
    constructor(brand){
        this.brand = brand;
        this.channel = 1;
        this.volume = 50;
        this.resetTV();
    }

    increaseVol(inc){
        this.volume += inc; 
        if(this.volume > 100){
            this.volume = 100;
        }
    }
    decreaseVol(dec){
        this.volume += dec;
        if(this.volume < 0){
            this.volume = 1;
        }
    }
    setChannel(cha){
        this.channel += cha;
        if(this.channel > 50){

        }
    }
    resetTV(){
        this.volume = 1;
        this.channel = 50;
    }
    statusTV(){
        return `${this.brand} at channel ${this.channel}, volume ${this.volume}`;
    }
}

var tv1 = new TV('Panasonic');


console.log(tv1.statusTV());
tv1.increaseVol(60);
console.log(tv1.statusTV());
tv1.resetTV();
console.log(tv1.statusTV());