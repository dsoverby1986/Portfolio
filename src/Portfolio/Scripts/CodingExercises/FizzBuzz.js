$(document).ready(function () {
    $('#fbButton').click(function () {
        for (var i = 0; i <= 100; i++) {
            fizzBuzz(i);
        }
    });
});

function fizzBuzz(i) {
    var element = $('<span></span>');
    var line = document.createElement('br');

    if (i % 3 === 0 && i % 5 === 0) {
        element.text('FizzBuzz');
    }
    else if (i % 3 === 0) {
        element.html('Fizz');
    }
    else if (i % 5 === 0) {
        element.text('Buzz');
    }
    else {
        element.text(i);
    }

    $('#fbArea').append(element);
    $('#fbArea').append(line);
}