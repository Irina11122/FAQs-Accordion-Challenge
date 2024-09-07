const questions = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".answer");

function showAndHideAnwsers(question, paragraph) {
  if (paragraph.style.display === "none" || paragraph.style.display === "") {
    paragraph.style.display = "block";
    question.src = "./images/icon-minus.svg";
  } else {
    paragraph.style.display = "none";
    question.src = "./images/icon-plus.svg";
  }
}

function addListeners(question, paragraph) {
  question.addEventListener("click", () => {
    showAndHideAnwsers(question, paragraph);
  });

  question.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      showAndHideAnwsers(question, paragraph);
    }
  });
}

questions.forEach((question, index) => {
  addListeners(question, answers[index]);
});
