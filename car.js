class Car{
  #brand;
  #model;
  #yearOfManufacturing;
  #maxSpeed;
  #maxFuelVolume;
  #fuelConsumption;
  #currentFuelVolume;
  #isStarted;
  #mileage;

  constructor(){
    this.#currentFuelVolume = 0;
    this.#isStarted = false;
    this.#mileage = 0;
  }

  start(){
    if(this.#isStarted){
      throw new Error('Car already started');
    }
    
    this.#isStarted = true;
  }

  shutDownEngine(){
    if(!this.#isStarted){
      throw new Error('Car is not started yet');
    }
    
    this.#isStarted = false;
  }

  fillUpGasTank(gasCount){
    if(this.checkNumberValidity(gasCount)){
      if(this.#currentFuelVolume + gasCount > this.#maxFuelVolume){
        throw new Error('Gas tank is full');
      }

      this.#currentFuelVolume += gasCount;
    } else {
      throw new Error('Invalid gas count')
    }
  }

  drive(speed, hours){
    if(!this.checkNumberValidity(speed)){
      throw new Error('Invalid speed')
    }

    if(!this.checkNumberValidity(hours)){
      throw new Error('Invalid hours count')
    }

    if(this.#maxSpeed < speed){
      throw new Error('Car cant drive so fast');
    }

    if(!this.#isStarted){
      throw new Error('Car should be started for driving');
    }

    const roadMiles = speed * hours;
    const roadGas =  roadMiles * (this.#fuelConsumption / 100);

    if(this.#currentFuelVolume < roadGas){
      throw new Error('Not enough fuel');
    }

    this.#currentFuelVolume = roadGas;
    this.#mileage += roadMiles;

  }

  checkNumberValidity(number){
    if(typeof number == 'number' && number != NaN && number > 0 && number != Infinity){
      return true;
    }

    return false;
  }

  get brand(){
    return this.#brand;
  }

  get model(){
    return this.#model;
  }

  get yearOfManufacturing(){
    return this.#yearOfManufacturing;
  }

  get maxSpeed(){
    return this.#maxSpeed;
  }

  get maxFuelVolume(){
    return this.#maxFuelVolume;
  }

  get fuelConsumption(){
    return this.#fuelConsumption;
  }

  get currentFuelVolume(){
    return this.#currentFuelVolume;
  }

  get isStarted(){
    return this.#isStarted;
  }

  get mileage(){
    return this.#mileage;
  }

  set brand(value){
    if(typeof value != 'string' || 0 >= value.length || value.length > 50){
      throw new Error('Invalid brand name')
    }

    this.#brand = value;
  }

  set model(value){
    if(typeof value != 'string' || 0 >= value.length || value.length > 50){
      throw new Error('Invalid model name')
    }

    this.#model = value;
  }

  set yearOfManufacturing(value){
    if(!this.checkNumberValidity(value) || 1900 > value || value > 2021){
      throw new Error('Invalid year of manufacturing');
    }

    this.#yearOfManufacturing = value;
  }

  set maxSpeed(value){
    if(!this.checkNumberValidity(value) || 100 > value || value > 300){
      throw new Error('Invalid max speed');
    }

    this.#maxSpeed = value;
  }

  set maxFuelVolume(value){
    if(!this.checkNumberValidity(value) || 5 > value || value > 20){
      throw new Error('Invalid max fuel volume');
    }

    this.#maxFuelVolume = value;
  }

  set fuelConsumption(value){
    if(!this.checkNumberValidity(value)){
      throw new Error('Invalid fuel consumption');
    }

    this.#fuelConsumption = value;
  }


}

module.exports = Car;