function pointTwo(){
  const firstVar = prompt('First variable');

  if(!+firstVar){
    console.log('Invalid input');
    return;
  }

  const secondVar = prompt('Second variable');

  if(!+secondVar){
    console.log('Invalid input');
    return;
  }

  console.log(`Answer: ${firstVar + secondVar}, ${firstVar / secondVar}`);
}

pointTwo();