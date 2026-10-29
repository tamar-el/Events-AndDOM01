// Exercise 1 - Live Business Card
// Write all your code in this file. Read README.md for the full instructions.
// Run the tests with: npm test

// Step 1: live text (name, job, email, bio -> card), trimmed, default text when empty
const cardName = document.getElementById("card-name");
const cardJob = document.getElementById("card-job");
const cardEmail = document.getElementById("card-email");
const cardBio = document.getElementById("card-bio");
const cardForm = document.getElementById("card-form");

const nameInput = document.getElementById("name-input");
const jobInput = document.getElementById("job-input");
const emailInput = document.getElementById("email-input");
const bioInput = document.getElementById("bio-input");
const avatarLetter = document.getElementById("avatar");

function changeText(event) {
    let textToChange;
    let emptyText;
    const ValueInput = (event.target.value).trim();
    if (event.target.id === "name-input") {
        textToChange = cardName;
        emptyText = "Your name";
        if (ValueInput === "") {
            avatarLetter.textContent = "?";
        } else {
            avatarLetter.textContent = ValueInput.charAt(0).toUpperCase();
        }
    } else if (event.target.id === "job-input") {
        textToChange = cardJob;
        emptyText = "Your job title";

    } else if (event.target.id === "email-input") {
        textToChange = cardEmail;
        emptyText = "your@email.com";

    } else {
        textToChange = cardBio;
        emptyText = "Your bio will appear here.";    }

    if (ValueInput == "") {
        textToChange.textContent = emptyText;
    } else {
        textToChange.textContent = ValueInput;
    }


}
nameInput.addEventListener('input', changeText);
jobInput.addEventListener('input', changeText);
emailInput.addEventListener('input', changeText);
bioInput.addEventListener('input', changeText);


// Step 2: avatar letter (first letter of the name in uppercase, "?" when empty)

// Step 3: bio character counter + "warning" class when 10 or fewer are left

// Step 4: accent color (card border + avatar background)

// Step 5: dark mode button

// Step 6: reset button

//
