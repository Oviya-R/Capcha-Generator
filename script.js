function generateCaptcha() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let captcha = "";
    for (let i = 0; i < 6; i++) {
        captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.getElementById("captcha").innerText = captcha;
}

function validateCaptcha() {
    const generated = document.getElementById("captcha").innerText;
    const user = document.getElementById("input").value;

    if (user === generated) {
        alert( "CAPTCHA verified successfully")
    } else {
        alert("CAPTCHA Verification Failed,Please try again!")
        generateCaptcha();
    }

    document.getElementById("userInput").value = "";
}

window.onload = generateCaptcha;
