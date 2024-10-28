// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Select all text boxes
    const textBoxes = document.querySelectorAll('.text-box');

    // Create a new IntersectionObserver
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // If the text box is in the viewport
            if (entry.isIntersecting) {
                // Get the background image associated with the text box
                const bgImage = entry.target.getAttribute('data-bg');
                
                // Update the body's background image
                document.body.style.backgroundImage = `url('images/${bgImage}')`;

                // Check if the current image is image4.jpg or image8.jpg and adjust background position
                if (bgImage === 'image4.jpg' || bgImage === 'image8.jpg') {
                    document.body.style.backgroundPosition = 'center top';
                } else {
                    document.body.style.backgroundPosition = 'center center'; // Default position
                }
            }
        });
    }, {
        threshold: 0.5 // When 50% of the element is in view
    });

    // Observe each text box
    textBoxes.forEach(textBox => {
        observer.observe(textBox);
    });
});
