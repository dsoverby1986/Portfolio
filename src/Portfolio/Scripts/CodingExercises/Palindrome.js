    $(function () {
        $('#checkPalindrome').click(function () {
            var palInput = $('#palInput').val().split("").filter(function (x) { return x !== ' '; });
            var palBackwards = [];
            var palOutput = $('#palResult');
            var palMatch = true;
            for (var i = 0; i < palInput.length; i++) {
                palBackwards[i] = palInput[i];
            }
            palBackwards = palBackwards.reverse();
            for (var i = 0; i < palInput.length; i++) {
                palInput[i] = palInput[i].toLowerCase();
                palBackwards[i] = palBackwards[i].toLowerCase();
            }
            if (palInput.length % 2 === 0) {
                for (var i = 0; i < (palInput.length / 2) ; i++) {
                    if (palInput[i] !== palBackwards[i]) {
                        palMatch = false;
                        if (palMatch === false) {
                            break;
                        }
                    }
                }
            }
            else {
                for (var i = 0; i < Math.floor(palInput.length / 2) ; i++) {
                    if (palInput[i] !==palBackwards[i]) {
                        palMatch = false;
                        if (palMatch === false) {
                            break;
                        }
                    }
                }
            }
            if (palMatch) {
                palOutput.text("Your word is a palindrome.");
            }
            else {
                palOutput.text("Your word is not a palindrome.");
            }
        })
    })