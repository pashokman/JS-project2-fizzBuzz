const fizzBuzz = (begin, end) => {

    for (let index = begin; index <= end; index++) {

        if (index % 3 === 0 && index % 5 === 0) {
            console.log('FizzBuzz');
        } else if (index % 3 === 0) {
            console.log('Fizz');
        } else if (index % 5 === 0) {
            console.log('Buzz');
        } else {
            console.log(`${index}`);
        }        
    }
}

fizzBuzz(11, 20);