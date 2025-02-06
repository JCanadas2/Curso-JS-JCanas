MultipleDeTres = ["fizz" ]
MultipleDeCinco = ["buzz" ]
MultipleDeCincoYTres = ["fizzbuzz" ]
let i = 0 ;

do {
    if(i % 3 === 0 && i % 5 === 0){
    console.log(`${i} ${MultipleDeCincoYTres}`)
} else if (i % 5 === 0){
    console.log(`${i} ${MultipleDeCinco}`)
} else if( i % 3 === 0 ) {
    console.log(`${i} ${MultipleDeTres}`) 
}
    i++;
} while ( i < 100);
