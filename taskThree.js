Array.prototype.myFilter = function(callback, context = this){
  const output = [];

  for(let i = 0; i < context.length; i++){
    if(callback(context[i], i, context)){
      output.push(context[i]);
    }
  }

  return output;
}

function createDebounceFunction(f, ms) {
  let isCooldown = false;
  let timeout;

  return function() {
    if (isCooldown){
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        isCooldown = false;
        f.apply(this, arguments);
      }, ms);
      return;
    } 

    isCooldown = true;

    timeout = setTimeout(() => {
      isCooldown = false;
      f.apply(this, arguments);
    }, ms);
  };
}