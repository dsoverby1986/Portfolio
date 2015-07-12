    $(function () {
        $('#getFactorial').click(function () {
            var facInput = $('#facInput').val();
            var facOutput = $('#facResult');
            facOutput.text(factorial(facInput));
        });
    });

    function factorial(input) {
        var factor = 1;
        for (var i = input; i > 0; i--) {
            factor *= i;
        }
        return factor;
    }