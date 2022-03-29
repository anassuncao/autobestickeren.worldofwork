function sendMail(contactForm) {
    emailjs.send("gmail","andre", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "message": contactForm.message.value,
    })
    .then(
        function(response) {
            console.log("SUCCESS", response.status, response.text);
            alert("Email sent successfully!");
        },
        function(error) {
            console.log("FAIL", error);
            alert("Failed!" + error);
        }
    );
    return false; 
}