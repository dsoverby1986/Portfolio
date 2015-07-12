    $(function () {
        $('#getHappy').click(function () {
            var hnInput = $('#hnInput').val().split("");
            var hnOutput = $('#hnResult');
            hnOutput.text(happyNumber(hnInput));
        });
    });

    function happyNumber(num) {
        var hnInputNum = [];
        var hnAllSums = [];
        var hnSum = 0;
        var hnDuplicate = false;
        do {
            for (var i = 0; i < num.length; i++) {
                hnInputNum[i] = parseInt(num[i]);
            }
            for (var i = 0; i < hnInputNum.length; i++) {
                hnSum += (hnInputNum[i] * hnInputNum[i]);
            }
            hnAllSums.push(hnSum);
            hnAllSums.sort(function (a, b) { return a - b });
            if (hnAllSums.length > 1) {
                for (var i = 0; i < hnAllSums.length; i++) {
                    if (hnAllSums[i] === hnAllSums[i + 1]) {
                        hnDuplicate = true;
                    }
                }
            }
            num = hnSum.toString().split("");
            hnInputNum = [];
            hnSum = 0;
        } while (hnAllSums[0] !== 1 && hnDuplicate === false)
        if (hnDuplicate) {
            return "Your number is Unhappy :-(";
        }
        else if (hnAllSums[0] === 1) {
            return "Your number is HAPPY!";
        }
    }