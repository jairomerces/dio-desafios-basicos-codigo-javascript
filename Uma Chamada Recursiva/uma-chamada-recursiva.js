let n = parseInt(gets(4));

function somatorio(n){
  if(n <= 1){
    return 1
  }else{ return n + somatorio(n-1)
  }
}
console.log(somatorio(n))