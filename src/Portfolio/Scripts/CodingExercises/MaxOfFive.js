$(function () {

        var mofOutputTag = $('#mofResult');

        mofOutputTag.closest('#mofOutput').hide();

        $('#largestButton').click(function () {

            var mofInputs = $('#numInputs input:valid');
            if (mofInputs.length < 5) {
                outputTag.closest('#mofOutput').hide();
                alert("Five numbers are needed.");
                return;
            }

            mofOutputTag.text(maxOfFive(mofInputs));
            mofOutputTag.closest('#mofOutput').show();

        });
});

function maxOfFive(input) {
    var mofLargestValue = input.sort(function (x, y) { return y.value - x.value; })[0].value;
    return mofLargestValue;
}