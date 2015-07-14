       $(function () {
           var lwInput = $('#lwInput');
           var lwResult = $('#lwResult');
           var lwOutLong = $('#lwOutLong');
           var lwReader = new FileReader();
           lwReader.onload = function (evt) {
               var lwText = "";
               var lwArray = [];
               var lwLonger = [];
               var lwHowLong = parseInt($('#lwStringLength').val());
               document.getElementById('lwOutLong').innerHTML = lwHowLong.toString();
               lwResult.text("");
               lwText = evt.target.result;
               lwText = lwText.replace(/\//g, " ");
               lwText = lwText.replace(/\\/g, " ");
               lwText = lwText.replace(/--/g, " ");
               lwText = lwText.replace(/ -/g, " ");
               lwText = lwText.replace(/- /g, " ");
               lwText = lwText.replace("{", " ");
               lwText = lwText.replace("}", " ");
               lwText = lwText.replace("=", " ");
               lwText = lwText.replace("^", " ");
               lwText = lwText.replace("[", " ");
               lwText = lwText.replace("]", " ");
               lwText = lwText.replace("^", " ");
               lwText = lwText.replace(/[.,?#*&%$;<>"+:!,)_/(\s,]/g, " ");
               lwArray = lwText.split(/\s+/);
               for (var i = 0; i < lwArray.length; i++) {
                   var lwElementLength = lwArray[i].length;
                   var lwElementFirst = lwArray[i].charAt(0);
                   var lwElementLast = lwArray[i].charAt(lwArray[i].length - 1);
                   lwArray[i] = lwArray[i].toLowerCase();
                   if (lwElementFirst === "'") {
                       lwArray[i] = lwArray[i].replace(lwArray[i].charAt(0), "");
                   }
                   else if (lwElementLast === "'") {
                       lwArray[i] = lwArray[i].replace(lwArray[i].charAt(lwArray[i].length - 1), "");
                   }
               }
               for (var i = 0; i < lwArray.length; i++) {
                   if (lwArray[i].length > lwHowLong) {
                       lwLonger.push(lwArray[i]);
                   }
               }
               if (lwLonger.length > 1) {
                   for (var i = 0; i < lwLonger.length; i++) {
                       var lwMatch = false;
                       if (lwLonger[i] === lwLonger[i + 1]) {
                           lwLonger.splice(i, 1);
                           lwMatch = true;
                       }
                       if (lwMatch) {
                           i -= 1;
                       }
                   }
               }
               lwResult.text(lwLonger);
           };
           lwInput.change(function (evt) {
               var file = evt.target.files[0];
               lwReader.readAsText(file);
           });
       });