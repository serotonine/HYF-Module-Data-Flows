"use-strict";
function add(...params){
  const negatives = [];
  
  numbers = params.map((str)=>{
    const split = str.split(",");
    if(!str.length){
      return 0;
    }
    else if(Number(str)<0){
      negatives.push(str);
      return 0;
    }
    else if(split.length >=2 ){
      return split.map(n => checkMille(n));
    }
    else if(isNaN(Number(str))){
      return 0;
    }
    else{
      return checkMille(str);
    }
  }).flat();
  if(negatives.length > 0){ throw new  Error ("Negatives are not allowed: " + negatives.join())}
  else{ return numbers.reduce((acc, current)=> acc + current, 0);}
}

function checkMille(str){
  const nb = Number(str);
  return Number(str) >= 1000 ? 0 : nb;
}

console.log(add("","5","cocinelle","5,1000", "3500", "-50", "-3"));