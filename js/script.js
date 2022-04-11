// MILESTONE 1

for (let i = 1; i <= 100; i++) {

        // Calcolo se hai multipli sia di valore 5 sia valore 3 esegui comando "FizzBuzz"
        if (i % 3 === 0 && i % 5 === 0 ) {
        console.log ('FizzBuzz');
        }

        // Calcolo se hai multipli solo di valore 5 esegui comando "Buzz"
        else if (i % 5 ===0) {
        console.log('Buzz');
        }

        // Calcolo se hai multipli solo di valore 3 esegui comando "Fizz"
        else if (i % 3 === 0) {
        console.log('Fizz');
        }

        // Altrimenti in tutti gli altri casi esegui comando "i"
        else {
        console.log(i)
        }

}