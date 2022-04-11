// MILESTONE 3 

//Applica lo stile per ogni box

const box = document.querySelector('.box2');

for (let i = 1; i <=100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        //A condizione verificata, esegui l'esecuzione del colore stabilito
        box.innerHTML += `<div class="box box-red">${'FizzBuzz'}</div>`;
    }
}