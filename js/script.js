const expandIcons = document.querySelectorAll(".expand-icon");
const answers = document.querySelectorAll(".answer");

const isExpanded = (icon, answer) => {
  if (!answer.classList.contains("expand")) {
    icon.src = "assets/icon-minus.svg";
  } else {
    icon.src = "assets/icon-plus.svg";
  }
  answer.classList.toggle("expand");
};

expandIcons.forEach((icon) => {
  icon.addEventListener("click", (e) => {
    e.preventDefault();

    const question = icon.closest(".question");
    const answer = question.querySelector(".answer");

    answers.forEach((a) => {
      if (a !== answer && a.classList.contains("expand")) {
        const iconToReset = a
          .closest(".question")
          .querySelector(".expand-icon");
        isExpanded(iconToReset, a);
      }
    });

    isExpanded(icon, answer);
  });
});
