class Car{
  constructor(){
    this._brand = '';
    this._model = '';
    this._yearOfManufacturing = 1900;
    this._maxSpeed = 100;
    this._maxFuelVolume = 5;
    this._fuelConsumption = 1;
    this._currentFuelVolume = 0;
    this._isStarted = false;
    this._mileage = 0;
  }

  start(){
    if(this._isStarted){
      throw new Error('Car already started');
    }
    
    this._isStarted = true;
  }

  shutDownEngine(){
    if(!this._isStarted){
      throw new Error('Car is not started yet');
    }
    
    this._isStarted = false;
  }

  fillUpGasTank(gasCount){
    if(this.checkNumberValidity(gasCount)){
      if(this._currentFuelVolume + gasCount > this._maxFuelVolume){
        throw new Error('Gas tank is full');
      }

      this._currentFuelVolume += gasCount;
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

    if(this._maxSpeed < speed){
      throw new Error('Car cant drive so fast');
    }

    if(!this._isStarted){
      throw new Error('Car should be started for driving');
    }

    const roadMiles = speed * hours;
    const roadGas =  roadMiles * (this._fuelConsumption / 100);

    if(this._currentFuelVolume < roadGas){
      throw new Error('Not enough fuel');
    }

    this._currentFuelVolume = roadGas;
    this._mileage += roadMiles;

  }

  checkNumberValidity(number){
    if(typeof number == 'number' && number != NaN && number > 0 && number != Infinity){
      return true;
    }

    return false;
  }

  get brand(){
    return this._brand;
  }

  get model(){
    return this._model;
  }

  get yearOfManufacturing(){
    return this._yearOfManufacturing;
  }

  get maxSpeed(){
    return this._maxSpeed;
  }

  get maxFuelVolume(){
    return this._maxFuelVolume;
  }

  get fuelConsumption(){
    return this._fuelConsumption;
  }

  get currentFuelVolume(){
    return this._currentFuelVolume;
  }

  get isStarted(){
    return this._isStarted;
  }

  get mileage(){
    return this._mileage;
  }

  set brand(value){
    if(typeof value != 'string' || 0 >= value.length || value.length > 50){
      throw new Error('Invalid brand name')
    }

    this._brand = value;
  }

  set model(value){
    if(typeof value != 'string' || 0 >= value.length || value.length > 50){
      throw new Error('Invalid model name')
    }

    this._model = value;
  }

  set yearOfManufacturing(value){
    if(!this.checkNumberValidity(value) || 1900 > value || value > 2021){
      throw new Error('Invalid year of manufacturing');
    }

    this._yearOfManufacturing = value;
  }

  set maxSpeed(value){
    if(!this.checkNumberValidity(value) || 100 > value || value > 300){
      throw new Error('Invalid max speed');
    }

    this._maxSpeed = value;
  }

  set maxFuelVolume(value){
    if(!this.checkNumberValidity(value) || 5 > value || value > 20){
      throw new Error('Invalid max fuel volume');
    }

    this._maxFuelVolume = value;
  }

  set fuelConsumption(value){
    if(!this.checkNumberValidity(value)){
      throw new Error('Invalid fuel consumption');
    }

    this._fuelConsumption = value;
  }


}

module.exports = Car;