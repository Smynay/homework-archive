function makeObjectDeepCopy(objectInput){
  const output = {};

  if(typeof objectInput == 'string' || 'number'){
    return objectInput;
  }

  Object.keys(objectInput).map((key) => {

    if(typeof objectInput[key] == 'object'){

      if(Array.isArray(objectInput[key])){
        output[key] = objectInput[key].map((arrayElement) => makeObjectDeepCopy(arrayElement));
      } else {
        output[key] = makeObjectDeepCopy(objectInput[key]);
      }

    } else {
      output[key] = objectInput[key];
    }
    
  });

  return output;
}

function selectFromInterval(arr, valOne, valTwo){
  if(!Array.isArray(arr) || typeof valOne != 'number' || typeof valTwo != 'number' ){
    throw new Error('Ошибка!');
  }

  arr.forEach(val => {
    if(typeof val != 'number'){
      throw new Error('Ошибка!');
    }
  });

  function getPositiveValue(num){
    return num < 0 ? 0 : num;
  }

  if(valOne < valTwo){
    return arr.slice(getPositiveValue(valOne-1), getPositiveValue(valTwo));
  }

  return arr.slice(getPositiveValue(valTwo-1), getPositiveValue(valOne));
}

let myIterable = {
  from: 1,
  to: 10,

  [Symbol.iterator]() {
    this.current = this.from;
    this.last = this.to;
    this.check = true;
    return this;
  },

  next(){
    if(this.check){
      if(typeof this.current != 'number' || typeof this.last != 'number'){
        throw new Error('Ошибка!');
      }

      if(this.current > this.last ){
        throw new Error('Ошибка!');
      }
    }

    if(this.current <= this.last){
      this.check = false;
      return {
        done: false,
        value: this.current++
      };
    }

    
    return { done: true };
  } 
}