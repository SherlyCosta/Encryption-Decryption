function encrypt() {
    var pt = (f1.fl.value).toLowerCase();
    var key = parseInt(f1.key.value);
    var alphabets = "abcdefghijklmnopqrstuvwxyz";
    var ct = "";
    for (var i = 0; i < pt.length; i++) {
        if (alphabets.indexOf(pt.charAt(i)) !== -1) {
            ct = ct + alphabets.charAt((alphabets.indexOf(pt.charAt(i)) + key) % 26);
        } else {
            ct = ct + pt.charAt(i); // Handle spaces and non-alphabetic characters
        }
    }
    f1.result.value = ct;
}

function decrypt() {
    var pt = (f1.fl.value).toLowerCase();
    var key = parseInt(f1.key.value);
    var alphabets = "abcdefghijklmnopqrstuvwxyz";
    var ct = "";
    for (var i = 0; i < pt.length; i++) {
        if (alphabets.indexOf(pt.charAt(i)) !== -1) {
          ct = ct + alphabets.charAt((alphabets.indexOf(pt.charAt(i)) - key + 26) % 26);
        } else {
            ct = ct + pt.charAt(i); // Handle spaces and non-alphabetic characters
        }
    }
    f1.result.value = ct;
}