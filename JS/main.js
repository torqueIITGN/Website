const date = new Date();
let year = date.getFullYear();
document.getElementById('copyright-section').innerHTML = '\n<div class="container">\n<p>© Torque, '+year+'</p>\n</div>\n'

// document.getElementsByClassName('form-control')[0].setAttribute("max_length", 10);
// console.log(document.getElementsByClassName('footer-form'))
document.getElementsByClassName("footer-form")[0].setAttribute('maxlength', 250);

function contributeSubmit() {
    alert("Thank you for showing interest. We will get in touch with you soon.\n(Make sure you have turned off adblockers so that we can send the form data)");
}

function feedbackSubmit() {
    alert("We received your feedback. Thanks a lot!\n(Make sure you have turned off adblockers so that we can send the form data)");
}

function subscribe() {
    window.location.href = 'https://forms.gle/ooeV6A3gxysKgsjh9';
}


// /// for getting current year in copyright
// function getCurrentYear(){
//     const date = new Date();
//     let year = date.getFullYear();
//     document.getElementById('copyright-section').innerHTML = '\n<div class="container">\n<p>© Torque, 67865</p>\n</div>\n'
//     // return year;
// }
