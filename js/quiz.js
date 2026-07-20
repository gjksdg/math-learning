document.addEventListener("DOMContentLoaded", () => {

    const answers = [7, 14, 24, 55];

    const button = document.getElementById("checkQuiz");

    const reset = document.getElementById("resetQuiz");

    const result = document.getElementById("quizResults");

    button.addEventListener("click", () => {

        let score = 0;

        answers.forEach((answer, index) => {

            const input = document.getElementById(`q${index + 1}`);

            input.classList.remove("correct", "incorrect");

            if (Number(input.value) === answer) {

                score++;

                input.classList.add("correct");

            } else {

                input.classList.add("incorrect");

            }

        });

        result.textContent =
            `You answered ${score} out of ${answers.length} correctly.`;

    });

    reset.addEventListener("click", () => {

        answers.forEach((_, index) => {

            const input = document.getElementById(`q${index + 1}`);

            input.value = "";

            input.classList.remove("correct", "incorrect");

        });

        result.textContent = "";

    });

});