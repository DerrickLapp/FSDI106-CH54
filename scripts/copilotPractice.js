document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Input fields
        const title = document.getElementById('title');
        const description = document.getElementById('description');
        const startDate = document.getElementById('start-date');
        const date = document.getElementById('date');

        // Validation
        let valid = true;
        let errorMessages = [];

        // Validate Title
        if (title.value.trim() === '') {
            valid = false;
            errorMessages.push('Title is required.');
        }

        // Validate Description
        if (description.value.trim() === '') {
            valid = false;
            errorMessages.push('Description is required.');
        }

        // Validate Start Date
        const startDateValue = new Date(startDate.value);
        const currentDate = new Date();
        if (startDate.value === '') {
            valid = false;
            errorMessages.push('Start Date is required.');
        } else if (startDateValue < currentDate) {
            valid = false;
            errorMessages.push('Start Date cannot be in the past.');
        }

        // Display Errors
        if (!valid) {
            alert(errorMessages.join('\n'));
        } else {
            alert('Form submitted successfully!');
            form.submit(); // Proceed with form submission if valid
        }
    });
});
