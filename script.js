function validateForm() {
    // Clear previous error messages
    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("memoryError").innerText = "";

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const memory = document.getElementById("memory").value.trim();

    let isValid = true;

    // Validation rules for each field

    // Name validation (3-25 characters, alphanumeric + punctuation)
    if (!validateName(name)) {
        document.getElementById("nameError").innerText = "Name must be between 3-25 characters and contain only valid characters.";
        isValid = false;
    }

    // Email validation (standard email format, max 50 characters)
    if (!validateEmail(email)) {
        document.getElementById("emailError").innerText = "Invalid email format or length exceeds 50 characters.";
        isValid = false;
    }

    // Memory validation (3-30,000 characters, alphanumeric + punctuation)
    if (!validateMemory(memory)) {
        document.getElementById("memoryError").innerText = "Memory must be between 3-30,000 characters and contain only valid characters.";
        isValid = false;
    }

    // If any validation failed, return false to block form submission
    return isValid;
}

// Helper function to validate name input
function validateName(name) {
    const minLength = 3;
    const maxLength = 25;
    const allowedCharactersRegex = /^[a-zA-Z0-9\s,.'!?-]+$/;  // Alphanumeric + basic punctuation

    // Check length and allowed characters
    return name.length >= minLength && name.length <= maxLength && allowedCharactersRegex.test(name);
}

// Helper function to validate email input
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  // Basic email pattern
    const maxLength = 50;

    // Check length and format
    return email.length <= maxLength && emailRegex.test(email);
}

// Helper function to validate memory input
function validateMemory(memory) {
    const minLength = 3;
    const maxLength = 30000;
    const allowedCharactersRegex = /^[a-zA-Z0-9\s,.'!?-]+$/;  // Alphanumeric + basic punctuation

    // Check length and allowed characters
    return memory.length >= minLength && memory.length <= maxLength && allowedCharactersRegex.test(memory);
}
