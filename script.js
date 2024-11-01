// Dynamically set the max attribute for the year of birth field to 10 years ago
const currentYear = new Date().getFullYear();
const minAgeYear = currentYear - 10; // assuming 10 is the minimum age to use a phone
document.getElementById('yearOfBirth').setAttribute('max', minAgeYear);

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let hasErrors = false;

    // Name validation
    const name = document.getElementById('name').value;
    if (name.length < 3) {
        document.getElementById('nameError').style.display = 'block';
        hasErrors = true;
    } else {
        document.getElementById('nameError').style.display = 'none';
    }

    // Year of Birth validation
    const yearOfBirth = parseInt(document.getElementById('yearOfBirth').value);
    if (isNaN(yearOfBirth) || yearOfBirth < 1900 || yearOfBirth > minAgeYear) {
        document.getElementById('yearOfBirthError').style.display = 'block';
        hasErrors = true;
    } else {
        document.getElementById('yearOfBirthError').style.display = 'none';
    }

    // Zipcode validation (conditional)
    const isUSResident = document.getElementById('isUSResident').checked;
    const zipcode = document.getElementById('zipcode').value;
    if (isUSResident) {
        document.getElementById('zipcodeField').style.display = 'block';
        if (!/^\d{5}$/.test(zipcode)) {
            document.getElementById('zipcodeError').style.display = 'block';
            hasErrors = true;
        } else {
            document.getElementById('zipcodeError').style.display = 'none';
        }
    } else {
        document.getElementById('zipcodeField').style.display = 'none';
    }

    // Password validation with basic requirements
    const password = document.getElementById('password').value;
    const passwordRequirements = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRequirements.test(password)) {
        document.getElementById('passwordError').textContent = "Password must be at least 8 characters and include uppercase, lowercase, and a number.";
        document.getElementById('passwordError').style.display = 'block';
        hasErrors = true;
    } else {
        document.getElementById('passwordError').style.display = 'none';
    }

    // Pizza Type validation
    const pizzaType = document.querySelector('input[name="pizzaType"]:checked');
    if (!pizzaType) {
        document.getElementById('pizzaTypeError').style.display = 'block';
        hasErrors = true;
    } else {
        document.getElementById('pizzaTypeError').style.display = 'none';
    }

    // Final check
    if (!hasErrors) {
        document.getElementById('successMessage').style.display = 'block';
    }
});
