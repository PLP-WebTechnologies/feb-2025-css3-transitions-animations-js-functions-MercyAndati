document.addEventListener('DOMContentLoaded', function() {
    const saveButton = document.getElementById('savePref');
    const colorSelect = document.getElementById('color');
    const body = document.body;

    // Load saved preference if it exists
    const savedColor = localStorage.getItem('bgColor');
    if (savedColor) {
        body.style.backgroundColor = savedColor;
        colorSelect.value = savedColor;
    }

    // Save preference button click handler
    saveButton.addEventListener('click', function() {
        const selectedColor = colorSelect.value;
        const buttonText = saveButton.textContent;
        
        // 1. Apply circular animation
        saveButton.classList.add('circle-animation');
        saveButton.textContent = "✓"; // Show checkmark during animation
        
        // 2. Save to localStorage and change background
        setTimeout(() => {
            localStorage.setItem('bgColor', selectedColor);
            body.style.backgroundColor = selectedColor;
            
            // Restore button text after animation completes
            setTimeout(() => {
                saveButton.textContent = buttonText;
                saveButton.classList.remove('circle-animation');
            }, 400); // Halfway through animation
        }, 400); // Start saving halfway through animation
    });
});
