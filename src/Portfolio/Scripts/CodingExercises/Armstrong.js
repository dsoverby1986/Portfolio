        $(function () {
            $('#getArmstrong').click(function () {
                var armInput = $('#armInput').val().split("");
                var armInputString = $('#armInput').val();
                var armOutput = $('#armResult');
                armOutput.text(armstrong(armInput, armInputString));
            });

            $('#allArmstrong').click(function () {
                var allArmOutput = $('#armDisplayAll');
                allArmOutput.text(getAllArmstrong());
            })
        })

        function armstrong(inputNum, inputString) {
            var armInputNum = [];
            var armSum = 0;
            var armAllProducts = [];
            for (var i = 0; i < inputNum.length; i++) {
                armInputNum[i] = parseInt(inputNum[i]);
            }
            for (var i = 0; i < armInputNum.length; i++) {
                armAllProducts[i] = Math.pow(armInputNum[i], armInputNum.length);
            }
            for (var i = 0; i < armAllProducts.length; i++) {
                armSum += armAllProducts[i];
            }
            if (armSum.toString() === inputString) {
                return "This is an Armstrong Number.";
            }
            else {
                return "This isn't an Armstrong Number.";
            }
        }

        function getAllArmstrong() {
            var allArmSum = 0;
            var allArmAllProducts = [];
            var allArmString = "";
            var allArmStringArray = [];
            var allArmNumArray = [];
            var allArmstrong = [];
            for (var i = 100; i < 1000; i++) {
                allArmString = i.toString();
                allArmStringArray = allArmString.split("");
                for (var j = 0; j < allArmStringArray.length; j++) {
                    allArmNumArray[j] = parseInt(allArmStringArray[j]);
                }
                for (var k = 0; k < allArmNumArray.length; k++) {
                    allArmAllProducts[k] = Math.pow(allArmNumArray[k], allArmNumArray.length);
                }
                for (var m = 0; m < allArmAllProducts.length; m++) {
                    allArmSum += allArmAllProducts[m];
                }
                if (allArmSum === i) {
                    allArmstrong.push(allArmSum);
                }
                allArmSum = 0;
            }
            return allArmstrong;
        }