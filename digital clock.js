
setInterval(() => {
    var h = document.getElementById("hours");
    var m = document.getElementById("minutes");
    var s = document.getElementById("seconds");
    var noon = document.getElementById("noon");

    var ht = new Date().getHours();
    var mt = new Date().getMinutes();
    var st = new Date().getSeconds();

    if (ht >= 12) {
        noon.innerHTML = "PM";
        h.innerHTML = ht - 12;
    }
    else {
        noon.innerHTML = "AM";
        h.innerHTML = ht;
    }

    m.innerHTML = mt;
    s.innerHTML = st;

}, 1000)

