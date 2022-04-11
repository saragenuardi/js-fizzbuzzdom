// MILESTONE 1
const box = document.querySelector('.box2');

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0 ) {

        box.innerHTML += `<div class="box box-red">FizzBuzz</div> `;
    }
    else if (i % 5 === 0) {
        box.innerHTML += `<div class="box box-yellow">Buzz</div> `;
    }
    else if (i % 3 === 0) {
        box.innerHTML += `<div class="box box-green">Fizz</div> `;
    }
    else {
        box.innerHTML += `<div class="box box-blue">${i}</div> `;
    }

}