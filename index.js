const btn = document.querySelector('.btn-submit');
const contactForm = document.querySelector('#contactForm')

function postEmailToDatabase(email){
    console.info(`Your email is ${email}`);
    return new Promise(resolve => setTimeout(resolve, 2000));
}

const contactBtnOptions = {
    pending: `
        Подождите ...
    `,
    success: `
        Спасибо!
        ✌️
    `,
}

const contactBtnPending = function() {
    btn.innerHTML = contactBtnOptions.pending
}
const contactBtnSuccess = function() {
    btn.innerHTML = contactBtnOptions.success
}

async function hendleFormSubmit(e) {
    e.preventDefault(); 
    setTimeout(contactBtnPending, 100);
    setTimeout(contactBtnSuccess, 1000);
}

// event listener form submit
contactForm.addEventListener('submit', hendleFormSubmit);
