const qrInput = document.getElementById("qrInput");
const generateBtn = document.getElementById("generateBtn");
const qrResult = document.getElementById("qrResult");
const qrImage = document.getElementById("qrImage");
const downloadBtn = document.getElementById("downloadBtn");
generateBtn.addEventListener("click", function () {
    const text = qrInput.value.trim();
    if (text === "") {
        alert("Please enter some text or a URL!");
        return;
    }
    const qrURL =
        "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data="
        + encodeURIComponent(text);
    qrImage.onload = function () {
        qrResult.style.display = "block";
        downloadBtn.style.display = "block";
        downloadBtn.href = qrURL;
    };
    qrImage.onerror = function () {
        alert("Could not generate QR code. Please try again.");
    };
    qrResult.style.display = "block";
    qrImage.src = qrURL;
});
qrInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        generateBtn.click();
    }
});
