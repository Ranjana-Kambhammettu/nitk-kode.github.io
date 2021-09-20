// Pageclip URL to send the form
const URL = "https://send.pageclip.co/XaebiYBDPAKyaIrImWjfnpsOYuiYAhyK/ContactForm";
// Timeout the form submit after 10 secs
const formSubmitTimeout = 10;

// POST the form
let xhr = new XMLHttpRequest();
xhr.addEventListener("load", afterSubmit);
xhr.addEventListener("error", onSubmitError);
xhr.addEventListener("timeout", onSubmitTimeout);


function submitContactUs(e) {
    // Stop page refresh
    e.preventDefault();

    xhr.open("POST", URL);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.timeout = formSubmitTimeout * 1000;

    // Get form data
    const name = document.getElementById('contact-name');
    const email = document.getElementById('contact-email');
    const tel = document.getElementById('contact-tel');
    const message = document.getElementById('contact-message');

    let body = {
        "Name": name.value,
        "Phone": tel.value,
        "E-Mail": email.value,
        "Message": message.value,
    };

    xhr.send(JSON.stringify(body));
}

// When we get response from PageClip
function afterSubmit() {
    alert("Form Submitted Successfully!");
    document.getElementById('contactForm').reset();
}

// Error in submitting
function onSubmitError() {
    alert("Error during submission. Please try again or try later.");
}

// Tiemout during submission
function onSubmitTimeout() {
    alert("Submission request timed out. Please try again later.");
}
