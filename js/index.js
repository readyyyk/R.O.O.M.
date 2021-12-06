var rtt = document.getElementById("rtt");

function cp() {
    if (window.screen.width < 1440) {
        document.location.replace("m.index.html");
    }
    rtt.style = `right: ${(window.screen.width-1440)/2-63}px;`
}