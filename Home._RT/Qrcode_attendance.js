function domReady(fn) {
    if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(fn, 1000);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

domReady(function() {
    function onScanSuccess(decodeText, decodeResult) {
        // Take attendance logic here
        console.log("Attendance taken for:", decodeText);
        alert("Attendance taken for: " + decodeText);
    }

    let htmlScanner = new Html5QrcodeScanner(
        "my-qr-reader",
        {
            fps: 10,
            qrbos: 250
        }
    );

    htmlScanner.render(onScanSuccess);
});