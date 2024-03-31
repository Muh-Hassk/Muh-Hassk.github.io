function submitForm() {
    // Get form element
    var form = document.getElementById('userForm');
    
    // Remove 'is-invalid' class from all elements
    form.querySelectorAll('.is-invalid').forEach(function(element) {
        element.classList.remove('is-invalid');
    });

    // Check if the form is valid
    if (form.checkValidity()) {
        // Get form data
        var formData = new FormData(form);
        
        // Convert formData to object
        var formDataObj = {};
        formData.forEach(function(value, key){
            formDataObj[key] = value;
        });
        
        // Log form data to console
        console.log(formDataObj);
        
        displaySubmittedData(formDataObj);
        
        // Reset form
        resetForm();
    } else {
        // If the form is not valid, highlight empty required fields with red border
        var elements = form.querySelectorAll('input, select, textarea');
        elements.forEach(function(element) {
            if (element.validity.valueMissing) {
                element.classList.add('is-invalid');
            }
        });
    }
}
function displaySubmittedData(formDataObj) {
    // Create card container element with Bootstrap grid classes
    var cardContainer = document.createElement('div');
    cardContainer.classList.add('col', 'mb-4');

    // Create card element
    var card = document.createElement('div');
    card.classList.add('card', 'product-card', 'border', 'custom-card'); 

    // Create card body element
    var cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    // Add card title
    var cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = 'Full Name: ' + formDataObj.firstName + ' ' + formDataObj.lastName;
    cardBody.appendChild(cardTitle);

    // Add email address
    var emailParagraph = document.createElement('p');
    emailParagraph.classList.add('card-text');
    emailParagraph.textContent = 'Email Address: ' + formDataObj.email;
    cardBody.appendChild(emailParagraph);

    // Add phone number
    var phoneParagraph = document.createElement('p');
    phoneParagraph.classList.add('card-text');
    phoneParagraph.textContent = 'Phone Number: ' + formDataObj.phone;
    cardBody.appendChild(phoneParagraph);

    // Add date of birth
    var dobParagraph = document.createElement('p');
    dobParagraph.classList.add('card-text');
    dobParagraph.textContent = 'Date of Birth: ' + formDataObj.dob;
    cardBody.appendChild(dobParagraph);

    // Add gender
    var genderParagraph = document.createElement('p');
    genderParagraph.classList.add('card-text');
    genderParagraph.textContent = 'Gender: ' + formDataObj.gender;
    cardBody.appendChild(genderParagraph);

    // Add address
    var addressParagraph = document.createElement('p');
    addressParagraph.classList.add('card-text');
    addressParagraph.textContent = 'Address: ' + formDataObj.address;
    cardBody.appendChild(addressParagraph);

    // Append card body to card
    card.appendChild(cardBody);

    // Append card to container
    cardContainer.appendChild(card);

    // Append card container to submitted data container
    var submittedDataContainer = document.getElementById('submittedDataContainer');
    submittedDataContainer.appendChild(cardContainer);
}



function resetForm() {
        document.getElementById("userForm").reset();
}