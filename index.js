//fizz buzz

for(let ii = 1; ii < 100; ii++){
 if(ii % 15 === 0){// la condicion menos comun la que va pasar menos veces por eso se tiene que poner arriba y no se detenga
  console.log(`${ii}FIZZ BUZZ`)
 }else if(ii % 3 === 0 ){//para sacar moltiplos de 3 si el numero actual al dividirlo entre 3 es iual a 0 es decir el modulo de 3 es igual a 0
  console.log(`${ii}Fizz`)
 }else if(ii % 5 ===0){
  console.log(`${ii}buzz`)
 }
}
