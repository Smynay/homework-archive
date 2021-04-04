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

  constructor(
    brand,
    model,
    yearOfManufacturing,
    maxSpeed,
    maxFuelVolume,
    fuelConsumption,
    currentFuelVolume = 0,
    isStarted = false,
    mileage = 0
  ){
    this.brand = brand;
    this.model = model;
    this.yearOfManufacturing = yearOfManufacturing;
    this.maxSpeed = maxSpeed;
    this.maxFuelVolume = maxFuelVolume;
    this.fuelConsumption = fuelConsumption;

    if(this.checkNumberValidity(currentFuelVolume, true) && currentFuelVolume <= this.maxFuelVolume){
      this.#currentFuelVolume = currentFuelVolume;
    } else {
      throw new Error('Invalid current fuel volume');
    }

    if(typeof isStarted == 'boolean'){
      this.#isStarted = isStarted;
    } else {
      throw new Error('Invalid isStarted parameter');
    }

    if(this.checkNumberValidity(mileage, true)){
      this.#mileage = mileage;
    } else {
      throw new Error('Invalid mileage')
    }
  }

  start(){
    if(!this.#currentFuelVolume){
      throw new Error('Car cant be started, check fuel');
    }

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
      if(!this.#maxFuelVolume){
        throw new Error('Invalid max fuel volume');
      }

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

    if(!this.#fuelConsumption){
      throw new Error('Invalid fuel consumption');
    }

    if(!this.#maxSpeed){
      throw new Error('Invalid max speed');
    }

    const roadMiles = speed * hours;
    const roadGas =  roadMiles * (this.#fuelConsumption / 100);

    if(this.#currentFuelVolume < roadGas){
      throw new Error('Not enough fuel');
    }

    this.#currentFuelVolume -= roadGas;
    this.#mileage += roadMiles;
  }

  checkNumberValidity(number, canBeZero = false){
    if(typeof number == 'number' && number != NaN && number >= 0 && number != Infinity){
      if(canBeZero){
        return true;
      }

      if(number > 0){
        return true;
      }
      
      return false;
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
    if(typeof value == 'string' && value.length > 0 && value.length <= 50){
      this.#brand = value;
    } else {
      throw new Error('Invalid brand name');
    }
  }

  set model(value){
    if(typeof value == 'string' && value.length > 0 && value.length <= 50){
      this.#model = value;
    } else {
      throw new Error('Invalid model name');
    }
  }

  set yearOfManufacturing(value){
    if(this.checkNumberValidity(value) && 1900 <= value && value <= 2021){
      this.#yearOfManufacturing = value;
    } else {
      throw new Error('Invalid year of manufacturing');
    }   
  }

  set maxSpeed(value){
    if(this.checkNumberValidity(value) && 100 <= value && value <= 300){
      this.#maxSpeed = value;
    } else {
      throw new Error('Invalid max speed');
    }
  }

  set maxFuelVolume(value){
    if(this.checkNumberValidity(value) && 5 <= value && value <= 20){
      this.#maxFuelVolume = value;
    } else {
      throw new Error('Invalid max fuel volume');
    }
  }

  set fuelConsumption(value){
    if(this.checkNumberValidity(value)){
      this.#fuelConsumption = value;
    } else {
      throw new Error('Invalid fuel consumption');
    }
  }
}

module.exports = Car;