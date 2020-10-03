
exports.min = function min (array) {
  if(Array.isArray(array)){
    if(array.length == 0){
      return 0;
    }
     if(array.length > 0){
       minNumber = array[0];
      for(i = 0; i < array.length; i++)
      {
        if(array[i] < minNumber)
        {
          minNumber = array[i];
        }
      }
      return minNumber;
     }
  }
  else{
    return 0;
  }
}

exports.max = function max (array) {
  if(Array.isArray(array)){
    if(array.length == 0){
      return 0;
    }
    if(array.length > 0){
      maxNumber = array[0];
      for(i = 0; i < array.length; i++){
        if(array[i] > maxNumber)
        {
          maxNumber = array[i];
        }
      }
      return maxNumber;
    }
  }
  else{
    return 0;
  }
}

exports.avg = function avg (array) {
  if(Array.isArray(array)){
    if(array.length == 0){
      return 0;
    }
    if(array.length > 0)
    {
      let avgNumber = 0;
      for(i = 0;i < array.length ; i++){
  
        avgNumber += array[i];
      }
      avgNumber /= array.length;
      return avgNumber;
    }
  }
  else{
    return 0;
  }
}
