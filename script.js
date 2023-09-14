document.addEventListener("DOMContentLoaded", function () {
  // Array to store the questions
  const questions = [
    {
      question: "An aged person is often defined as?",
      choices: [
        "A) Someone who is above 60 years of age",
        "B) Someone who experiences memory loss",
        "C) Someone who lives in a retirement home",
        "D) Someone who has reached retirement age",
      ],
    },
    {
      question:
        "Change that commonly associated with aging in sensory function?",
      choices: [
        "A) Increased visual acuity",
        "B) Enhanced taste perception",
        "C) Heightened sense of touch",
        "D) Decreased hearing sensitivity",
      ],
    },
    {
      question:
        "Which of the following is a typical change in motor abilities in aged individuals?",
      choices: [
        "A) Faster reaction times",
        "B) Improved fine motor skills",
        "C) Increased muscle strength",
        "D) Reduced balance and coordination",
      ],
    },
    {
      question:
        "Change that commonly associated in the appearance of elderly individuals?",
      choices: [
        "A) Darkening of hair color",
        "B) Thicker and firmer skin",
        "C) Decreased wrinkles and age spots",
        "D) Loss of skin elasticity and formation of wrinkles",
      ],
    },
    {
      question:
        "Which of the following significantly impacts an individual's engagement in physical recreational activities?",
      choices: [
        "A) Health",
        "B) Education",
        "C) Economic status",
        "D) Living condition",
      ],
    },
    {
      question:
        "Which is significant in determining the range of recreational activities a person can afford?",
      choices: [
        "A) Health",
        "B) Education",
        "C) Economic status",
        "D) Living condition",
      ],
    },
    {
      question:
        "Which of these might shape recreational choices and preferences by affecting exposure to different types of hobbies?",
      choices: [
        "A) Eye color",
        "B) Blood type",
        "C) Economic status",
        "D) Living condition",
      ],
    },
    {
      question:
        "What role can marital status play in influencing an individual's recreational activities?",
      choices: [
        "A) It determines their favorite color.",
        "B) It impacts their height and weight.",
        "C) It affects their choice of transportation.",
        "D) It can influence the availability of leisure time.",
      ],
    },
    {
      question:
        "What is used to describe the act of recording details about medication administration for future reference?",
      choices: ["A) Dose", "B) Documentation", "C) Route", "D) Time"],
    },
    {
      question:
        "When providing medication to a patient, which factor refers to the specific amount of the drug to be administered?",
      choices: ["A) Dose", "B) Documentation", "C) Route", "D) Time"],
    },
    {
      question:
        "Properly recording information about a person with a disability, including both their physical and emotional health, is unnecessary for diagnosing their disabilities. ",
      choices: ["True", "False"],
    },
    {
      question:
        "Following the doctor's orders regarding dosage and medication time is crucial for a patient's recovery. ",
      choices: ["True", "False"],
    },
    {
      question:
        "Practicing basic principles of caregiving such as safety, sanitation, and hygiene helps maintain a healthy and comfortable environment for the patient. ",
      choices: ["True", "False"],
    },
    {
      question:
        "It's unnecessary to maintain a clean and neat room for the patient's comfort. ",
      choices: ["True", "False"],
    },
    {
      question:
        "Providing support to people with needs should prioritize a safe and healthy environment, as it may hinder their independence. ",
      choices: ["True", "False"],
    },
    {
      question:
        "A well-made bed with appropriate support is essential for the patient's rest and recovery. ",
      choices: ["True", "False"],
    },
    {
      question:
        "Keeping the environment clean and paying attention to housekeeping and waste disposal on a daily basis is not important for maintaining a hygienic and safe space. ",
      choices: ["True", "False"],
    },
    {
      question:
        "Disrupting the surroundings when the patient is sleeping has a minimal impact on their overall well-being and recovery. ",
      choices: ["True", "False"],
    },
    {
      question:
        "Offering balanced and nutritious food to the patient is a priority, as their energy levels are not affected by their diet. ",
      choices: ["True", "False"],
    },
    {
      question:
        "Always maintaining care, respect, and support toward individuals with disabilities fosters a positive and compassionate caregiving environment. ",
      choices: ["True", "False"],
    },
    {
      question:
        "When conversing with someone who has a hearing impairment, it's better to speak loudly to ensure they can hear properly. ",
      choices: ["True", "False"],
    },
    {
      question:
        "When using an interpreter, it's important to address the interpreter directly rather than the person they are interpreting for. ",
      choices: ["True", "False"],
    },
    {
      question:
        "Utilizing pictures, drawings, and gestures can be helpful in enhancing communication with individuals who have disabilities. ",
      choices: ["True", "False"],
    },
    {
      question:
        "Supporting a person while walking by placing one arm around their waist from behind and the other hand under their armpit is a recommended technique, as it may lead to discomfort or instability. ",
      choices: ["True", "False"],
    },
    {
      question:
        "Patients with arthritis or partial paralysis require assistance when getting in and out of a car for doctor or hospital visits, as they cannot manage on their own. ",
      choices: ["True", "False"],
    },
    {
      question: "It is caused by malfunctioning of a body part.",
      choices: [
        "A) Organic",
        "B) Functional",
        "C) Radiological",
        "D) Physical",
        "E) Congenital",
        "F) Allergenic",
        "G) Endocrinologic",
        "H) Degenerative",
      ],
    },
    {
      question:
        "It is due to the emotional trauma or experiences of the individual.",
      choices: [
        "A) Organic",
        "B) Functional",
        "C) Radiological",
        "D) Physical",
        "E) Congenital",
        "F) Allergenic",
        "G) Endocrinologic",
        "H) Degenerative",
      ],
    },
    {
      question:
        "It is brought about by conditions during fetal life and the baby is born with it.",
      choices: [
        "A) Organic",
        "B) Functional",
        "C) Radiological",
        "D) Physical",
        "E) Congenital",
        "F) Allergenic",
        "G) Endocrinologic",
        "H) Degenerative",
      ],
    },
    {
      question:
        "It is due to injuries suffered by a body part, like fractures and dislocations due to accidents.",
      choices: [
        "A) Organic",
        "B) Functional",
        "C) Radiological",
        "D) Physical",
        "E) Congenital",
        "F) Allergenic",
        "G) Endocrinologic",
        "H) Degenerative",
      ],
    },
    {
      question:
        "It is due to improper functioning of the endocrine glands, for example, gigantism, and dwarfism.",
      choices: [
        "A) Organic",
        "B) Functional",
        "C) Radiological",
        "D) Physical",
        "E) Congenital",
        "F) Allergenic",
        "G) Endocrinologic",
        "H) Degenerative",
      ],
    },
    {
      question:
        "It is brought about by old age or other factors wherein body cells deteriorate and lose their resiliency.",
      choices: [
        "A) Organic",
        "B) Functional",
        "C) Radiological",
        "D) Physical",
        "E) Congenital",
        "F) Allergenic",
        "G) Endocrinologic",
        "H) Degenerative",
      ],
    },
    {
      question:
        "It is due to exposure to radioactive materials, for example, leukemia, and cancers due to exposure to radioactive elements.",
      choices: [
        "A) Organic",
        "B) Functional",
        "C) Radiological",
        "D) Physical",
        "E) Congenital",
        "F) Allergenic",
        "G) Endocrinologic",
        "H) Degenerative",
      ],
    },
    {
      question:
        "It is due to a person's sensitivity to exposure to offending resulting in exaggerated reactions such as itching, skin rashes, and sneezing.",
      choices: [
        "A) Organic",
        "B) Functional",
        "C) Radiological",
        "D) Physical",
        "E) Congenital",
        "F) Allergenic",
        "G) Endocrinologic",
        "H) Degenerative",
      ],
    },
    {
      question: "Solid forms of medication designed for oral consumption.",
      choices: [
        "A) Drops",
        "B) Back Rub",
        "C) Powder",
        "D) Injection",
        "E) Capsule and Tablet",
        "F) Ointment",
        "G) Inhalation",
      ],
    },
    {
      question:
        "Medication in a fluid form is often measured using a dropper, syringe, or cup for accurate dosage.",
      choices: [
        "A) Drops",
        "B) Back Rub",
        "C) Powder",
        "D) Injection",
        "E) Capsule and Tablet",
        "F) Ointment",
        "G) Inhalation",
      ],
    },
    {
      question:
        "A semi-solid topical medication that is applied externally to the skin for localized treatment.",
      choices: [
        "A) Drops",
        "B) Back Rub",
        "C) Powder",
        "D) Injection",
        "E) Capsule and Tablet",
        "F) Ointment",
        "G) Inhalation",
      ],
    },
    {
      question:
        "A finely ground substance used for various medical purposes, often mixed with liquid before administration.",
      choices: [
        "A) Drops",
        "B) Back Rub",
        "C) Powder",
        "D) Injection",
        "E) Capsule and Tablet",
        "F) Ointment",
        "G) Inhalation",
      ],
    },
    {
      question:
        "A therapeutic massage technique applied to the back to promote relaxation.",
      choices: [
        "A) Drops",
        "B) Back Rub",
        "C) Powder",
        "D) Injection",
        "E) Capsule and Tablet",
        "F) Ointment",
        "G) Inhalation",
      ],
    },
    {
      question:
        "The process of delivering medication directly into the body using a syringe and needle.",
      choices: [
        "A) Drops",
        "B) Back Rub",
        "C) Powder",
        "D) Injection",
        "E) Capsule and Tablet",
        "F) Ointment",
        "G) Inhalation",
      ],
    },
    {
      question:
        "Medication is delivered in small-measured quantities, typically using a dropper.",
      choices: [
        "A) Drops",
        "B) Back Rub",
        "C) Powder",
        "D) Injection",
        "E) Capsule and Tablet",
        "F) Ointment",
        "G) Inhalation",
      ],
    },
  ];

  // Initialize game state
  let gameStarted = false;
  let selectedBriefcase = null;
  let correctAnswer = null;

  // Function to shuffle the questions array randomly
  function shuffleQuestions() {
    for (let i = questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [questions[i], questions[j]] = [questions[j], questions[i]];
    }
  }

  // Function to start the game
  function startGame() {
    if (!gameStarted) {
      shuffleQuestions();
      gameStarted = true;
      document.getElementById("start-button").style.display = "none";
      document
        .getElementById("final-answer-button")
        .addEventListener("click", handleFinalAnswer);

      // Create briefcases and attach click event listeners
      const briefcaseContainer = document.getElementById("briefcase-container");
      briefcaseContainer.innerHTML = ""; // Clear any existing briefcase elements

      for (let i = 1; i <= 40; i++) {
        const briefcase = document.createElement("div");
        briefcase.classList.add("briefcase", "unopened");
        briefcase.dataset.briefcaseNumber = i;
        briefcase.textContent = i; // Add the number to the briefcase
        briefcaseContainer.appendChild(briefcase);

        briefcase.addEventListener("click", () => openBriefcase(i));
      }
    }
  }

  // Define the correct answers for each briefcase
  const correctAnswers = [
    0, // A
    3, // D
    3, // D
    3, // D
    0, // A
    2, // C
    2, // C
    3, // D
    3, // D
    0, // A
    1, // False
    0, // True
    0, // True
    1, // False
    1, // False
    0, // True
    1, // False
    1, // False
    1, // False
    0, // True
    1, // False
    1, // False
    0, // True
    1, // False
    1, // False
    0, // Organic
    1, // Functional
    4, // Congenital
    3, // Physical
    6, // Endocrinologic
    7, // Degenerative
    2, // Radiological
    5, // Allergenic
    4, // E
    7, // H
    5, // F
    2, // C
    1, // B
    3, // D
    0, // A
  ];

  function shuffleQuestions() {
    for (let i = questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [questions[i], questions[j]] = [questions[j], questions[i]];
      [correctAnswers[i], correctAnswers[j]] = [correctAnswers[j], correctAnswers[i]]; // Shuffle correct answers along with questions
    }
  }
  
  function startGame() {
    if (!gameStarted) {
      shuffleQuestions();
      gameStarted = true;
      document.getElementById("start-button").style.display = "none";
      document
        .getElementById("final-answer-button")
        .addEventListener("click", handleFinalAnswer);

      const briefcaseContainer = document.getElementById("briefcase-container");
      briefcaseContainer.innerHTML = "";

      for (let i = 1; i <= 40; i++) {
        const briefcase = document.createElement("div");
        briefcase.classList.add("briefcase", "unopened");
        briefcase.dataset.briefcaseNumber = i;
        briefcase.textContent = i;
        briefcaseContainer.appendChild(briefcase);

        briefcase.addEventListener("click", () => openBriefcase(i));
      }
    }
  }

  function openBriefcase(number) {
    if (gameStarted) {
      var finalButton = document.getElementById("final-answer-button");
      finalButton.style.display = "inline-block"; 
      const questionDisplay = document.getElementById("question-display");
      const briefcase = document.querySelector(
        `.briefcase[data-briefcase-number="${number}"]`
      );

      if (!briefcase.classList.contains("opened")) {
        briefcase.addEventListener("click", () => selectBriefcase(number));
        briefcase.style.backgroundImage = 'url("opened-briefcase.png")';
        briefcase.classList.add("opened");

        const questionData = questions[number - 1];
        const questionText = questionData.question;
        const choices = questionData.choices;

        const radioGroup = document.createElement("div");
        choices.forEach((choice, index) => {
          const radioLabel = document.createElement("label");
          const radioInput = document.createElement("input");
          radioInput.type = "radio";
          radioInput.name = `choice-${number}`;
          radioInput.id = `choice-${number}-${index}`;
          radioInput.value = index;
          const lineBreak = document.createElement("br");
          radioLabel.appendChild(radioInput);
          radioLabel.appendChild(document.createTextNode(choice));
          radioGroup.appendChild(radioLabel);
          if (index < choices.length - 1) {
            radioGroup.appendChild(lineBreak);
          }
        });

        questionDisplay.innerHTML = `<p>${questionText}</p>`;
        questionDisplay.appendChild(radioGroup);

        briefcase.textContent = "";

        selectedBriefcase = number;
      }
    }
  }

  // Function to handle the final answer
function handleFinalAnswer() {
  if (selectedBriefcase !== null) {
    const userAnswer = document.querySelector(
      `input[name="choice-${selectedBriefcase}"]:checked`
    );

    if (userAnswer) {
      const selectedAnswer = parseInt(userAnswer.value);
      const correctAnswerIndex = correctAnswers[selectedBriefcase - 1];

      if (selectedAnswer === correctAnswerIndex) {
        // Correct answer
        document.querySelector(
          `.briefcase[data-briefcase-number="${selectedBriefcase}"]`
        ).style.backgroundImage = 'url("green-briefcase.png")';
        console.log(
          "selected answer:",
          selectedAnswer,
          "selected briefcase:",
          selectedBriefcase,
          "correct answer:",
          correctAnswerIndex
        );
      } else {
        // Incorrect answer
        document.querySelector(
          `.briefcase[data-briefcase-number="${selectedBriefcase}"]`
        ).style.backgroundImage = 'url("red-briefcase.png")';
        alert(
          "Your answer is incorrect. The correct answer is: " +
            questions[selectedBriefcase - 1].choices[correctAnswerIndex]
        );
        console.log(
          "selected answer:",
          selectedAnswer,
          "selected briefcase:",
          selectedBriefcase,
          "correct answer:",
          correctAnswerIndex
        );
      }

      disableBriefcases();
      clearQuestionDisplay();
      selectedBriefcase = null;
    } else {
      alert("Please select an answer before clicking Final Answer.");
    }
  } else {
    console.log("selectedBriefcase is null");
  }
}


  function highlightBriefcase(number, color) {
    const briefcase = document.querySelector(
      `.briefcase[data-briefcase-number="${number}"]`
    );
    briefcase.style.backgroundColor = color;
  }

  function disableBriefcases() {
    const briefcases = document.querySelectorAll(".briefcase");
    briefcases.forEach((briefcase) => {
      briefcase.classList.remove("unopened");
      briefcase.removeEventListener("click", () => openBriefcase());
    });
  }

  function clearQuestionDisplay() {
    const questionDisplay = document.getElementById("question-display");
    questionDisplay.innerHTML = "";
  }

  document.getElementById("start-button").addEventListener("click", startGame);
});
