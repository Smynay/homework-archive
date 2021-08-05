class Calculator {
  #varOne;
  #operation;
  #varTwo;

  constructor() {
    this.#varOne = '';
    this.#varTwo = '';
    this.#operation = '';
  }

  addSymbol(symbol){
    if(this.#operation.length){
      this.varTwo += symbol;
    } else {
      this.varOne += symbol;
    }
  }

  removeSymbol(){
    if(this.#operation.length){
      this.varTwo = this.#varTwo.slice(0, -1);
    } else {
      this.varOne = this.#varOne.slice(0, -1);
    }
  }

  calculate(){
    switch (this.#operation){
      case 'sum':
        return this.#varOne + this.#varTwo; 
    }
  }

  get currentValue() {
    if(this.#operation.length){
      return this.#varTwo;
    }

    return this.#varOne;
  }

  set operation(operation){
    switch (operation) {
      case 'sum':
        this.#operation = operation;
        break;

      case 'sub':
        this.#operation = operation;
        break;

      case 'div':
        this.#operation = operation;
        break;

      case 'mult': 
        this.#operation = operation;
        break;

      default:
        throw new Error('Invalid operation name');
    }
  }
}