function sendMail(contactForm) {
    emailjs.send("service_1ykoy9p","auto", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "date": contactForm.date.value,
        "time": contactForm.time.value,
    })
    .then(
        function(response) {
            console.log("SUCCESS", response.status, response.text);
            alert("Uw e-mail is verzonden. We nemen binnenkort contact met u op.");
        },
        function(error) {
            console.log("FAIL", error);
            alert("Failed!" + error);
        }
    );
    return false; 
}