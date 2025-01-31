function submitfeedback() {
    // filling the form
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const rating = document.querySelector('input[name="rating"]:checked')?.value;
    const likes = document.getElementById('likes').value.trim();
    const suggestions = document.getElementById('suggestions').value.trim();
    const formMessage = document.getElementById('formMessage'); // Ensure it exists in HTML

    // Checking the form
    if (rating && name && email) {
        // Preparing the form
        const feedbackData = {
            name: name  ,
            email: email  ,
            rating: rating,
            likes: likes,
            suggestions: suggestions,
        };

        // Displaying success
        if (formMessage) {
            formMessage.textContent = 'Thank you, ' + (name || 'Anonymous') + '! Your feedback has been submitted successfully.';
            formMessage.className = 'successful';
            formMessage.style.display = 'block';
        }

        console.log('Feedback submitted:', feedbackData);

        // Clear 
        document.getElementById('feedbackform').reset();
    } else {

        alert('Please fill out all required fields (Rating, emails, and names).');
    }
}
