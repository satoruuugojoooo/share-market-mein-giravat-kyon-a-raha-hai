function showContactDetails() {
    const contactDiv = document.getElementById("contactDetails");
    const spinner = document.getElementById("spinner");
    
    // Show spinner before displaying contact details
    spinner.classList.remove("hidden");
    
    setTimeout(() => {
        spinner.classList.add("hidden"); // Hide spinner
        contactDiv.classList.toggle("hidden"); // Toggle contact details visibility
    }, 1000); // 1-second delay for effect
}
