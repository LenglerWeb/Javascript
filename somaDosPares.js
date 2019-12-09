function somaDosPares(x){
  var par = 0;
  for(var i=0; i<=x; i+=2){
    console.log(i)
    par = par + i
  }
  return par;
}
