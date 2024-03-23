
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let errorMessages = [];
    let formIsValid = true;

    const name = document.getElementById('name').value;
    if (name.length < 3) {
        errorMessages.push("Name must be at least 3 characters long.");
        formIsValid = false;
    }

    const yearOfBirth = document.getElementById('yearOfBirth').value;
    if (yearOfBirth < 1900 || yearOfBirth > 2100) {
        errorMessages.push("Year of birth must be between 1900 and 2100.");
        formIsValid = false;
    }

    const usResidentCheckbox = document.getElementById('usResident');
    const zipcode = document.getElementById('zipcode').value;
    if (usResidentCheckbox.checked && (zipcode.length !== 5 || !/^\d+$/.test(zipcode))) {
        errorMessages.push("Zipcode must be a 5-digit number.");
        formIsValid = false;
    }

    const password = document.getElementById('password').value;
    if (password.length < 8) {
        errorMessages.push("Password must be at least 8 characters long.");
        formIsValid = false;
    }

    const pizzaPreference = document.querySelector('input[name="pizzaPreference"]:checked');
    if (!pizzaPreference) {
        errorMessages.push("Please select your preferred type of pizza.");
        formIsValid = false;
    }

    displayMessages(errorMessages, formIsValid);
});

document.getElementById('usResident').addEventListener('change', function(event) {
    const zipcodeInput = document.getElementById('zipcode');
    const zipcodeLabel = document.getElementById('zipcodeLabel');
    if (this.checked) {
        zipcodeInput.style.display = 'block';
        zipcodeLabel.style.display = 'block';
        zipcodeInput.setAttribute('required', '');
    } else {
        zipcodeInput.style.display = 'none';
        zipcodeLabel.style.display = 'none';
        zipcodeInput.removeAttribute('required');
    }
});

function displayMessages(errorMessages, formIsValid) {
    const errorContainer = document.getElementById('errorMessages');
    const successMessage = document.getElementById('successMessage');
    
    errorContainer.innerHTML = ''; // Clear previous messages
    if (formIsValid) {
        successMessage.style.display = 'block';
        errorContainer.style.display = 'none';
        successMessage.innerHTML = "Accepted";
    } else {
        successMessage.style.display = 'none';
        errorContainer.style.display = 'block';
        errorMessages.forEach((message) => {
            const errorParagraph = document.createElement('p');
            errorParagraph.textContent = message;
            errorContainer.appendChild(errorParagraph);
        });
    }
}
