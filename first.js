function pointOne(){
  const firstVar = prompt('First variable');
  const secondVar = prompt('Second variable');

  if(+firstVar && +secondVar){
    console.log(parseInt(firstVar, secondVar));
  } else {
    console.log('Invalid input');
  }
}

pointOne();