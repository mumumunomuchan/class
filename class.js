class Vehicle {
       constructor(make,modle,year){
              this.make = make
              this.modle = modle
              this.year = year
       }
       
       honk(){
              return "Beep";
       }

       toString(){
              console.log(`The vehicle is a ${this.make} ${this.modle} from ${this.year}.`)
       }
       
}

class Car extends Vehicle{
       constructor(make,model,year){
              super(make,model,year);
              this.numWheels = 4;

       }
}

class Motorcycle extends Vehicle{
       constructor(make, model, year){
              super(make,model,year);
              this.numWheels = 2;
       }

       revEngine(){
              return 'VROOM!!!';
       } 
}

class Garage{
       constructor(capacity){
              this.vehicles = [];
              this.capacity = capacity;
       }
       add(newVehicle){
              if(!newVehicle instanceof Vehicle){
                     return “Only vehicles are allowed in here!”;
              }
              if(this.vehicle.length >= this.capacity){
                     return "Sorry, we're full.";
              }
              this.vehicle.push(newVehicle);
              return "Vehicle added!";
       }
}