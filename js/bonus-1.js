// MILESTONE 2 

//appendi elemento html
const mileStone = document.querySelector('.milestone-2');

for (let i =1; i <=100; i++) {
    if (i % 3 === 0 && i % 5 === 0 ) {

        mileStone.innerHTML += `<span>${'FizzBuzz'} ${'-'}</span> `;
    }
    else if (i % 5 === 0) {
        mileStone.innerHTML += `<span>${'Buzz'} ${'-'}</span> `;
    }
    else if (i % 3 === 0) {
        mileStone.innerHTML += `<span>${'Fizz'} ${'-'}</span> `;
    }
    else {
        mileStone.innerHTML += `<span>${i} ${'-'}</span> `;
    }
}