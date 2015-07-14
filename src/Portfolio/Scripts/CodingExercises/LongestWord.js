$(function () {


    var estInput = $('#estInput');
    var estReader = new FileReader();

    estReader.onload = function (evt) {

        var estResult = $('#estResult');
        var estText = "";
        var estArray;
        var estCollection = [];
        //estOutput.text("");
        estResult.text("");
        estText = evt.target.result;
        estText = estText.replace(/\//g, " ");
        estText = estText.replace(/\\/g, " ");
        estText = estText.replace(/--/g, " ");
        estText = estText.replace(/ -/g, " ");
        estText = estText.replace(/- /g, " ");
        estText = estText.replace("{", " ");
        estText = estText.replace("}", " ");
        estText = estText.replace("=", " ");
        estText = estText.replace("^", " ");
        estText = estText.replace("[", " ");
        estText = estText.replace("]", " ");
        estText = estText.replace("^", " ");
        estText = estText.replace(/[.,?#*&%$;<>"+:!,)_/(\s,]/g, " ");
        estArray = estText.split(/\s+/);
        //This loop is to replace apostrophes that occur at the beginning or the end of a string
        for (var i = 0; i < estArray.length; i++) {
            var estElementLength = estArray[i].length;
            var estElementFirst = estArray[i].charAt(0);
            var estElementLast = estArray[i].charAt(estArray[i].length - 1);
            if (estElementFirst === "'") {
                estArray[i] = estArray[i].replace(estElementFirst, "");
            }
            else if (estElementLast === "'") {
                estArray[i] = estArray[i].replace(estElementLast, "");
            }
        }
        //This loop will place the appropriate strings into the collection array
        for (var i = 0; i < estArray.length; i++) {
            if (estCollection.length === 0) {
                estCollection.push(estArray[0]);
            }
            else {
                for (var j = 0; j < estCollection.length; j++) {
                    if (estArray[i].length > estCollection[j].length) {
                        estCollection.splice(0, estCollection.length, estArray[i]);
                    }
                    else if (estArray[i].length === estCollection[0].length) {
                        estCollection.push(estArray[i]);
                        j = estCollection.length;
                    }
                }
            }
        }
        //This loop changes all of the strings in the collection array to have all lowercase characters
        for (var i = 0; i < estCollection.length; i++) {
            estCollection[i] = estCollection[i].toLowerCase();
        }
        //This conditional statement and subsequent loop will remove any elements of the collection array that
        //contains the same string as another element in the array
        if (estCollection.length > 1) {
            for (var i = 0; i < estCollection.length; i++) {
                var estMatch = false;
                if (estCollection[i] === estCollection[i + 1]) {
                    estCollection.splice(i, 1);
                    estMatch = true;
                }
                if (estMatch) {
                    i -= 1;
                }
            }
        }
        estResult.text(estCollection);
    };

    estInput.change(function (evt) {
        var file = evt.target.files[0];
        estReader.readAsText(file);
    });
});