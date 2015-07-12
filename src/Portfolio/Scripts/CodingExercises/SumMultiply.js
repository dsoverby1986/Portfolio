
$(function () {

    $('#sumMultiplyButton').click(function () {
        var input = $('#input input:valid');
        var outputTag = $('#result');
        outputTag.text("The sum of the numbers is " + sum(input) + " and the product of the numbers is " + multiply(input) + ".");
        outputTag.closest('.output').show();
    });

});

function sum(input) {
    var container = input.val().split(' ').filter(function (x) { return x !== ''; });
    var sum = 0;
    for (var i = 0; i < container.length; i++) {
        var current = parseInt(container[i]);
        sum += current;
    }
    return sum;
}

function multiply(input) {
    var container = input.val().split(' ').filter(function (x) { return x !== '' });
    var product = 1;
    for (var i = 0; i < container.length; i++) {
        var current = parseInt(container[i]);
        product *= current;
    }
    return product;
}
