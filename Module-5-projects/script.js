function add() {
    let studentA = 1;
    
    // Closure
    return function() {
        studentA++;
        console.log(studentA);
    };
}

const result = add();

result();
result();
result();

function countdown(number) {
    if (number === 0) {
        return;
    }

    console.log(number);

    countdown(number - 1);
}

countdown(3);