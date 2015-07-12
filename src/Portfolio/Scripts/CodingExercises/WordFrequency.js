        $(function () {
            var freqInput = $('#freqInput');
            var freqOutput = $('#freqDisplay');
            var freqResult = $('#freqResult');
            var freqTable = $('#freqMyTable');
            var freqBody = $('#freqBody');

            var freqReader = new FileReader();

            freqTable.hide();

            freqReader.onload = function (evt) {
                $('#freqMyTable tbody tr').remove()
                var freqText = "";
                var freqArray;
                var freqDict = {};
                freqOutput.text("");
                freqResult.text("");
                freqOutput.text(evt.target.result);

                freqText = evt.target.result;

                freqText = freqText.replace(/\//g, " ");
                freqText = freqText.replace(/\\/g, " ");
                freqText = freqText.replace(/--/g, " ");
                freqText = freqText.replace(/ -/g, " ");
                freqText = freqText.replace(/- /g, " ");
                freqText = freqText.replace("{", " ");
                freqText = freqText.replace("}", " ");
                freqText = freqText.replace("=", " ");
                freqText = freqText.replace("^", " ");
                freqText = freqText.replace("[", " ");
                freqText = freqText.replace("]", " ");
                freqText = freqText.replace("^", " ");
                freqText = freqText.replace(/[.,?#*&%$;<>"+:!,)_/(\s,]/g, " ");

                freqArray = freqText.split(/\s+/);

                for (var i = 0; i < freqArray.length; i++) {

                    var freqElementFirst = freqArray[i].charAt(0);

                    var freqElementLast = freqArray[i].charAt(freqArray[i].length - 1);

                    if (freqElementFirst === "'") {
                        freqArray[i] = freqArray[i].replace(freqElementFirst, "");
                    }
                    else if (freqElementLast === "'") {
                        freqArray[i] = freqArray[i].replace(freqElementLast, "");
                    }

                    freqArray[i] = freqArray[i].toLowerCase();

                    if (freqArray[i] in freqDict) {
                        freqDict[freqArray[i]] += 1;
                    }
                    else {
                        freqDict[freqArray[i]] = 1;
                    }

                }

                freqArray = sortProperties(freqDict);

                for (var i = 0; i < freqArray.length; i++) {
                    var trFreq = $('<tr></tr>');
                    var td1Freq = $('<td></td>');
                    var td2Freq = $('<td></td>');
                    freqBody.append(trFreq.append(td1Freq.text(freqArray[i][0])));
                    freqBody.append(trFreq.append(td2Freq.text(freqArray[i][1])));
                }

                freqTable.show();

            };

            freqInput.change(function (evt) {
                var file = evt.target.files[0];
                freqReader.readAsText(file);
            });

        });


function sortProperties(obj) {
    // convert object into array
    var sortable = [];
    for (var key in obj)
        if (obj.hasOwnProperty(key))
            sortable.push([key, obj[key]]); // each item is an array in format [key, value]

    // sort items by value
    sortable.sort(function (a, b) {
        return a[1] - b[1]; // compare numbers
    });
    return sortable; // array in format [ [ key1, val1 ], [ key2, val2 ], ... ]
}