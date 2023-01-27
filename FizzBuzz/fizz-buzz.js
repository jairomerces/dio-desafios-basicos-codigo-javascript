let numero = gets(3)

function FizzBuzz(numero){
  for (let i= 1; numero < 20; i++)
    if (numero%15===0)   
      return 'FizzBuzz'
        else if (numero%3===0)   
          return 'Fizz'
            else if (numero%5===0)   
              return 'Buzz'
                else return numero
}console.log(FizzBuzz(numero))