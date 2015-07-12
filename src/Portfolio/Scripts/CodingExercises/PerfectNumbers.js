$(function () {
    $('#pnOutputTag').hide();
        $('#checkPefect').click(function () {
            var perInput = parseInt($('#pnInput').val(), 10);
            var perOutput = $('#pnResult');
            perOutput.text(perfectNumbers(perInput));
            $('#pnOutputTag').show();
        });

        $('#allPerfect').click(function () {
            var allPerDisplay = $('#displayAllPerfect');
            allPerDisplay.text(allPerfect());
        });
});

function perfectNumbers(num) {
    var perCollection = [];
    var perSum = 0;
    for (var i = 1; i < num; i++) {
        if (num % i === 0) {
            perCollection.push(i);
        }
    }
    for (var i = 0; i < perCollection.length; i++) {
        perSum += perCollection[i];
    }
    if (perSum === num) {
        return "Yes!";
    }
    else {
        return "No way!";
    }
}

function allPerfect() {
    var allPerDivisors = [];
    var allPerCollection = [];
    var allPerSum = 0;
    for (var i = 2; i <= 10000; i++) {
        for (var j = 1; j < i; j++) {
            if (i % j === 0) {
                allPerDivisors.push(j);
            }
        }
        for (var k = 0; k < allPerDivisors.length; k++) {
            allPerSum += allPerDivisors[k];
        }
        if (allPerSum === i) {
            allPerCollection.push(i);
        }
        allPerSum = 0;
        allPerDivisors = [];
    }
    return allPerCollection;
}