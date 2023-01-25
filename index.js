function scuberGreetingForFeet(someValue){
  // Write your code here!
  if (someValue <= 400) {
  return "This is on me !" ; 
  }
  else if (someValue >= 400 && someValue <= 2000){
    return "That will be twenty bucks." ;
  }
  else if (someValue > 2000 && someValue <= 2500){
  return "I will gladly take your thirty bucks." ; 
  }
  else 
  return 'No can do.'; 
}

function ternaryCheckCity(city){
  // Write your code here!
  city === NYC ? 'Ok, sounds good.' : 'No go.' ; 
}

function switchOnCharmFromTip(Name){
  // Write your code here!
  switch(Name){
    case 'generous' : 
    return 'Thank you so much.' ;
    case 'not as generous' : 
    return 'Thank you.' ; 
    default : 
    return 'Bye.' ; 
  }
}

function addFive(someNumber) {
  let result ; 
  if (someNumber > 0) {
    result = someNumber + 5;
  }
  return result
}
console.log(addFive(20));
