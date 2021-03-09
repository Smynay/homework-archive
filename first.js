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