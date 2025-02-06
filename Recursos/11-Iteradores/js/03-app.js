MultipleDeTres = ["fizz" ]
MultipleDeCinco = ["buzz" ]
MultipleDeCincoYTres = ["fizzbuzz" ]

for (let i=0; i < 100; i++) {
    if(i % 3 === 0 && i % 5 === 0){
        console.log(`${i} ${MultipleDeCincoYTres}`)
    } else if (i % 5 === 0){
        console.log(`${i} ${MultipleDeCinco}`)
    } else if( i % 3 === 0 ) {
        console.log(`${i} ${MultipleDeTres}`) 
    } else {
        console.log("Mondongo error")
    }
}