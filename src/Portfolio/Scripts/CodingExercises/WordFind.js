        $(function () {
            var wfInput = $('#wfInput');
            var wfOutput = $('#wfDisplay');
            var wfResult = $('#wfResult');
            var wfText = "";
            var wfReader = new FileReader();
            wfReader.onload = function (evt) {
                var wfWord = $('#wfWord').val().toLowerCase();
                var wfCounter = 0;
                wfOutput.text("");
                wfResult.text("");
                wfOutput.text(evt.target.result);
                wfText = evt.target.result;
                //As ashamed as I am to admit it, this is the easiest way that I KNOW of to get rid of these characters. Yes, I'm a loser.
                wfText = wfText.replace(/\//g, " ");
                wfText = wfText.replace(/\\/g, " ");
                wfText = wfText.replace(/--/g, " ");
                wfText = wfText.replace(/ -/g, " ");
                wfText = wfText.replace(/- /g, " ");
                wfText = wfText.replace("{", " ");
                wfText = wfText.replace("}", " ");
                wfText = wfText.replace("=", " ");
                wfText = wfText.replace("^", " ");
                wfText = wfText.replace("[", " ");
                wfText = wfText.replace("]", " ");
                wfText = wfText.replace("^", " ");
                wfText = wfText.replace(/[.,?#*&%$;<>"+:!,)_/(\s,]/g, " ");
                wfArray = wfText.split(/\s+/);
                //This loop changes all of the strings in the collection array to have all lowercase characters
                for (var i = 0; i < wfArray.length; i++) {
                    wfArray[i] = wfArray[i].toLowerCase();
                    if (wfArray[i] === wfWord) {
                        wfCounter += 1;
                    }
                }
                //This loop and subsequent conditional statement find the given word in the array and count how many occurrences there are.
                /*for (var i = 0; i < array.length; i++) {
                    if(array[i] === word) {
                        counter += 1;
                    }
                }*/
               wfResult.text(wfCounter);
            };
            wfInput.change(function (evt) {
                var file = evt.target.files[0];
                wfReader.readAsText(file);
            });
        });