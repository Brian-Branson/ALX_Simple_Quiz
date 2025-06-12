function checkAnswer() {
    const correctAnswer = "4";
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    const feedback = document.getElementById("feedback");

    if (!selectedOption) {
        feedback.textContent = "Please select an answer.";
        feedback.style.backgroundColor = "#ffc107"; // Yellow warning
        feedback.style.display = "block";
        return;
    }

    const userAnswer = selectedOption.value;

    feedback.style.display = "block";

    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
        feedback.style.backgroundColor = "#28a745"; // Green
    } else {
        feedback.textContent = "That's incorrect. Try again!";
        feedback.style.backgroundColor = "#dc3545"; // Red
    }
}

document.getElementById("submit-answer").addEventListener("click", checkAnswer);
