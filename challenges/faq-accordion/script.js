const FAQs = [
  {
    question: "What is Frontend Mentor, and how will it help me?",
    answer: `Frontend Mentor offers realistic coding challenges to help developers improve their frontend
        coding skills with projects in HTML, CSS, and JavaScript. It's suitable for
        all levels and ideal for portfolio building.`,
  },
  {
    question: "Is Frontend Mentor free?",
    answer: `Yes, Frontend Mentor offers both free and premium coding challenges, with the
        free option providing access to a range of projects suitable for all skill
        levels.`,
  },
  {
    question: "Can I use Frontend Mentor projects in my portfolio?",
    answer: `Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
      way to showcase your skills to potential employers!`,
  },
  {
    question: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
    answer: `Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
      way to showcase your skills to potential employers!`,
  },
];

const faqContainer = document.getElementById("faqs");

const getFAQAccordion = (question, answer, openByDefault = false) => {
  const details = document.createElement("details");
  details.open = openByDefault;

  const questionDOM = document.createElement("summary");
  const icon = document.createElement("img");
  const iconSrcs = {
    open: "./images/icon-plus.svg",
    close: "./images/icon-minus.svg",
  };
  icon.src = openByDefault ? iconSrcs.close : iconSrcs.open;

  questionDOM.innerHTML = question;
  questionDOM.appendChild(icon);
  questionDOM.addEventListener("click", () => {
    const isOpen = !details.open;
    icon.src = isOpen ? iconSrcs.close : iconSrcs.open;
  });

  const answerDOM = document.createElement("p");
  answerDOM.innerHTML = answer;

  details.append(questionDOM, answerDOM);
  return details;
};

const faqList = FAQs.map((qa, index) =>
  getFAQAccordion(qa.question, qa.answer, index === 0)
);

faqContainer.append(...faqList);
