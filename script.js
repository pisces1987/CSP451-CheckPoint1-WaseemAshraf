/**
 * CSP451 - CheckPoint 1
 * Script to demonstrate JS integration
 */

function displayWelcomeMessage(name) {
    const message = `Hello, ${name}! Welcome to the DevOps World. Current date: ${new Date().toLocaleDateString()}`;
    console.log(message);
    return message;
}

// Initializing the script
window.onload = () => {
    displayWelcomeMessage("Waseem Ashraf");
    console.log("Git Repository Setup confirmed.");
};