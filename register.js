const registerForm = () =>{
    

        // Prevent the default form submission behavior
        event.preventDefault();

        // Get form values
        const companyName = document.getElementById("companyName").value.trim();
        const contactPerson = document.getElementById("contactPerson").value.trim();
        const telephone = document.getElementById("telephone").value.trim();
        const boothSize = document.getElementById("boothSize").value;
        const chairsNumber = parseInt(document.getElementById("chairs").value);

        // Validation
        let isValid = true;

        if (companyName === "" || companyName === " ") {
            isValid = false;
            alert("Company name is required.");
        }

        if (contactPerson === "" || contactPerson === " ") {
            isValid = false;
            alert("Contact person is required.");
        }

        if (telephone === "" || telephone === " ") {
            isValid = false;
            alert("Telephone is required.");
        }

        if (boothSize === "") {
            isValid = false;
            alert("Booth size is required.");
        }

        if (chairsNumber < 1 || chairsNumber > 10 || isNaN(chairsNumber)) {
            isValid = false;
            alert("Chairs number should be between 1 and 10.");
        }

        // If all validations pass, submit the form
        if (isValid) {
            alert("Form submitted successfully!");
            registerForm.reset();
        }
    };

