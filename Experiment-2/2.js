const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form values
    const firstName = document.querySelector('input[name="fname"]').value.trim();
    const lastName = document.querySelector('input[name="lname"]').value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');
    const qualifications = document.querySelectorAll(
        'input[name="qualification"]:checked'
    );
    const address = document.querySelector('textarea[name="address"]').value.trim();
    const country = document.querySelector('select[name="country"]').value;
    const mobile = document.querySelector('input[name="mobile"]').value.trim();

    // Validation
    if (firstName === "") {
        alert("Please enter your first name.");
        return;
    }

    if (lastName === "") {
        alert("Please enter your last name.");
        return;
    }

    if (!gender) {
        alert("Please select your gender.");
        return;
    }

    if (qualifications.length === 0) {
        alert("Please select at least one qualification.");
        return;
    }

    if (address === "") {
        alert("Please enter your address.");
        return;
    }

    if (country === "") {
        alert("Please select your country.");
        return;
    }

    // Mobile number validation
    const mobilePattern = /^[0-9]{10}$/;

    if (!mobilePattern.test(mobile)) {
        alert("Please enter a valid 10-digit mobile number.");
        return;
    }

    // Success message
    alert("Employee Registration Successful!");

    // Display submitted data in console
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Gender:", gender.value);
    console.log(
        "Qualification:",
        Array.from(qualifications).map(q => q.value)
    );
    console.log("Address:", address);
    console.log("Country:", country);
    console.log("Mobile:", mobile);

    // Reset form
    form.reset();
});