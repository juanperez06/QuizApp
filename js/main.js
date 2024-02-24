let quizzes = [
    {
        "title": "HTML",
        "icon": "./assets/images/icon-html.svg",
        "questions": [
            {
                "question" : "What does HTML stand for?",
                "options" : [
                    "Hyper Trainer Marking Language", 
                    "Hyper Text Marketing Language", 
                    "Hyper Text Markup Language",
                    "Hyper Text Markup Leveler"
                ],
                "answer": "Hyper Text Markup Language"
            },
            {
                "question" : "Which of the following is the correct structure for an HTML document?",
                "options" : [
                    "&lt;html&gt;&lt;head&gt;&lt;/head&gt;&lt;body&gt;&lt;/body&gt;&lt;html&gt;",
                    "&lt;head&gt;&lt;html&gt;&lt;/html&gt;&lt;body&gt;&lt;/body&gt;&lt;head&gt;",
                    "&lt;body&gt;&lt;head&gt;&lt;/head&gt;&lt;html&gt;&lt;/html&gt;&lt;body&gt;",
                    "&lt;html&gt;&lt;body&gt;&lt;/body&gt;&lt;head&gt;&lt;/head&gt;&lt;/html&gt;"
                ],
                "answer": "&lt;html&gt;&lt;head&gt;&lt;/head&gt;&lt;body&gt;&lt;/body&gt;&lt;html&gt;"
            },
            {
                "question": "Which HTML element is used to define the title of a document?",
                "options": [
                    "&lt;head&gt;",
                    "&lt;title&gt;",
                    "&lt;header&gt;",
                    "&lt;top&gt;"
                ],
                "answer": "&lt;title&gt;"
            },
            {
                "question": "What is the purpose of the <body> tag in HTML?",
                "options": [
                    "It defines the document's head section.",
                    "It contains all the content such as text, images, and links.",
                    "It is used to define the main content of an HTML document.",
                    "It specifies the body of the email content in HTML."
                ],
                "answer": "It contains all the content such as text, images, and links."
            },
            {
                "question": "Which HTML tag is used to create a hyperlink?",
                "options": [
                    "&lt;hyperlink&gt;",
                    "&lt;link&gt;",
                    "&lt;a&gt;",
                    "&lt;href&gt;"
                ],
                "answer": "&lt;a&gt;"
            },
            {
                "question": "Which tag is used to display images in HTML?",
                "options": [
                    "&lt;img&gt;",
                    "&lt;image&gt;",
                    "&lt;src&gt;",
                    "&lt;pic&gt;"
                ],
                "answer": "&lt;img&gt;"
            },
            {
                "question": "What attribute is used to provide the path of an image in the <img> tag?",
                "options": [
                    "link",
                    "src",
                    "href",
                    "url"
                ],
                "answer": "src"
            },
            {
                "question": "Which HTML tag is used to create an unordered list?",
                "options": [
                    "&lt;ul&gt;",
                    "&lt;ol&gt;",
                    "&lt;list&gt;",
                    "&lt;li&gt;"
                ],
                "answer": "&lt;ul&gt;"
            },
            {
                "question": "What does the &lt;br&gt; tag do?",
                "options": [
                    "It breaks the text into two sections.",
                    "It creates a bold text.",
                    "It inserts a line break.",
                    "It adds a new row in a table."
                ],
                "answer": "It inserts a line break."
            },
            {
                "question": "In HTML, what does the `fieldset` tag do?",
                "options": [
                    "It is used to group related data in a form.",
                    "It sets the field to a fixed size.",
                    "It automatically validates the fields within a form.",
                    "It hides the fields in a form."
                ],
                "answer": "It is used to group related data in a form."
            }
        ]
    },
    {
        "title": "CSS",
        "icon": "./assets/images/icon-css.svg",
        "questions": [
            {
                "question": "What does CSS stand for?",
                "options": [
                    "Colorful Style Sheets",
                    "Computer Style Sheets",
                    "Cascading Style Sheets",
                    "Creative Style Sheets"
                ],
                "answer": "Cascading Style Sheets"
            },
            {
                "question": "Which HTML attribute is used to define inline styles?",
                "options": [
                    "styles",
                    "style",
                    "class",
                    "font-style"
                ],
                "answer": "style"
            },
            {
                "question": "How do you insert a comment in a CSS file?",
                "options": [
                    "// this is a comment //",
                    "/* this is a comment */",
                    "-- this is a comment --",
                    "&lt;!-- this is a comment --&gt;"
                ],
                "answer": "/* this is a comment */"
            },
            {
                "question": "Which property is used to change the background color of an element?",
                "options": [
                    "color",
                    "bgcolor",
                    "background-color",
                    "background"
                ],
                "answer": "background-color"
            },
            {
                "question": "How do you apply a style to all &lt;p&gt; elements?",
                "options": [
                    "p { }",
                    ".p { }",
                    "#p { }",
                    "all.p { }"
                ],
                "answer": "p { }"
            },
            {
                "question": "Which property is used to change the font of an element?",
                "options": [
                    "font-style",
                    "text-style",
                    "font-family",
                    "typeface"
                ],
                "answer": "font-family"
            },
            {
                "question": "How do you make each word in a text start with a capital letter?",
                "options": [
                    "text-transform: capitalize",
                    "text-transform: uppercase",
                    "text-style: capital",
                    "font-transform: capitalize"
                ],
                "answer": "text-transform: capitalize"
            },
            {
                "question": "How do you select an element with the class name 'header'?",
                "options": [
                    ".header",
                    "#header",
                    "header",
                    "*header"
                ],
                "answer": ".header"
            },
            {
                "question": "What is the default value of the 'position' property?",
                "options": [
                    "relative",
                    "fixed",
                    "absolute",
                    "static"
                ],
                "answer": "static"
            },
            {
                "question": "What is the purpose of the z-index property in CSS?",
                "options": [
                    "To count the number of elements",
                    "To set the magnification level of an element",
                    "To specify the stack order of an element",
                    "To create a zoom effect"
                ],
                "answer": "To specify the stack order of an element"
            }
        ]
    },
    {
        "title": "JavaScript",
        "icon": "./assets/images/icon-js.svg",
        "questions": [
            {
                "question": "Which syntax is correct to output 'Hello World' in an alert box?",
                "options": [
                    "alertBox('Hello World');",
                    "msg('Hello World');",
                    "alert('Hello World');",
                    "msgBox('Hello World');"
                ],
                "answer": "alert('Hello World');"
            },
            {
                "question": "How do you call a function named 'myFunction'?",
                "options": [
                    "call function myFunction()",
                    "call myFunction()",
                    "myFunction()",
                    "execute myFunction()"
                ],
                "answer": "myFunction()"
            },
            {
                "question": "How to write an IF statement in JavaScript?",
                "options": [
                    "if i = 5 then",
                    "if (i == 5)",
                    "if i == 5",
                    "if i = 5"
                ],
                "answer": "if (i == 5)"
            },
            {
                "question": "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
                "options": [
                    "if (i <> 5)",
                    "if i =! 5 then",
                    "if (i != 5)",
                    "if i not = 5"
                ],
                "answer": "if (i != 5)"
            },
              {
                "question": "How does a FOR loop start?",
                "options": [
                    "for (i = 0; i <= 5)",
                    "for i = 1 to 5",
                    "for (i <= 5; i++)",
                    "for (i = 0; i <= 5; i++)"
                ],
                "answer": "for (i = 0; i <= 5; i++)"
            },
            {
                "question": "How can you add a single-line comment in JavaScript?",
                "options": [
                  "'This is a single-line comment",
                  "//This is a single-line comment",
                  "&lt;!--This is a single-line comment--&gt;",
                  "/* This is a single-line comment */"
                ],
                "answer": "//This is a single-line comment"
            },
            {
                "question": "What is the correct way to write a JavaScript array?",
                "options": [
                    "var colors = (1:'red', 2:'green', 3:'blue')",
                    "var colors = ['red', 'green', 'blue']",
                    "var colors = 'red', 'green', 'blue'",
                    "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')"
                ],
                "answer": "var colors = ['red', 'green', 'blue']"
            },
            {
                "question": "How do you find the number with the highest value of x and y?",
                "options": [
                    "Math.ceil(x, y)",
                    "top(x, y)",
                    "Math.max(x, y)",
                    "Math.highest(x, y)"
                ],
                "answer": "Math.max(x, y)"
            },
            {
                "question": "Which operator is used to assign a value to a variable?",
                "options": [
                    "-",
                    "*",
                    "=",
                    "x"
                ],
                "answer": "="
            },
            {
                "question": "What is the correct way to write a JavaScript object?",
                "options": [
                    "var person = {firstName: 'John', lastName: 'Doe'};",
                    "var person = {firstName = 'John', lastName = 'Doe'};",
                    "var person = (firstName: 'John', lastName: 'Doe');",
                    "var person = (firstName = 'John', lastName = 'Doe');"
                ],
                "answer": "var person = {firstName: 'John', lastName: 'Doe'};"
            }
        ]
    },
    {
        "title": "Accessibility",
        "icon": "./assets/images/icon-accessibility.svg",
        "questions": [
            {
                "question": "What does 'WCAG' stand for?",
                "options": [
                    "Web Content Accessibility Guidelines",
                    "Web Compliance Accessibility Guide",
                    "Web Content Accessibility Goals",
                    "Website Compliance and Accessibility Guidelines"
                ],
                "answer": "Web Content Accessibility Guidelines"
            },
            {
                "question": "Which element is used to provide alternative text for images for screen reader users?",
                "options": [
                    "<alt>",
                    "<figcaption>",
                    "<description>",
                    "<img alt='description'>"
                ],
                "answer": "<img alt='description'>"
            },
            {
                "question": "What does ARIA stand for in web development?",
                "options": [
                    "Accessible Rich Internet Applications",
                    "Advanced Responsive Internet Assistance",
                    "Accessible Responsive Internet Applications",
                    "Automated Responsive Internet Actions"
                ],
                "answer": "Accessible Rich Internet Applications"
            },
            {
                "question": "Which of the following is not a principle of the WCAG?",
                "options": [
                    "Perceivable",
                    "Dependable",
                    "Operable",
                    "Understandable"
                ],
                "answer": "Dependable"
            },
            {
                "question": "Which of these color contrast ratios defines the minimum WCAG 2.1 Level AA requirement for normal text?",
                "options": [
                    "3:1",
                    "4.5:1",
                    "7:1",
                    "2:1"
                ],
                "answer": "4.5:1"
            },
            {
                "question": "Which of the following elements is inherently focusable, meaning it can receive focus without a 'tabindex' attribute?",
                "options": [
                    "<div>",
                    "<span>",
                    "<a href='...'>",
                    "<p>"
                ],
                "answer": "<a href='...'>"
            },
            {
                "question": "What is the purpose of the 'lang' attribute in an HTML page?",
                "options": [
                    "To specify the scripting language",
                    "To define the character set",
                    "To indicate the language of the page content",
                    "To declare a language pack"
                ],
                "answer": "To indicate the language of the page content"
            },
            {
                "question": "Which guideline ensures that content is accessible by keyboard as well as by mouse?",
                "options": [
                    "Keyboard Accessible",
                    "Mouse Independence",
                    "Device Independence",
                    "Operable Controls"
                ],
                "answer": "Keyboard Accessible"
            },
            {
                "question": "What is the role of 'skip navigation' links in web accessibility?",
                "options": [
                    "To skip over primary navigation to the main content",
                    "To provide shortcuts to different sections of the website",
                    "To help users skip unwanted sections like advertisements",
                    "To bypass broken links in the navigation"
                ],
                "answer": "To skip over primary navigation to the main content"
            },
            {
                "question": "Which of these tools can help in checking the accessibility of a website?",
                "options": [
                    "W3C Validator",
                    "Google Lighthouse",
                    "CSS Validator",
                    "JavaScript Console"
                ],
                "answer": "Google Lighthouse"
            }
        ]
    }
]

let pages = {
    'home' : `
    <div class="app-wrapper quiz-menu">
      <div class="welcome left-side">
        <h1>Welcome to the <span>Frontend Quiz!</span></h1>
        <p>Pick a subject to get started</p>
      </div>
      <div class="subject-picker right-side">
        <div class="subject" id="html">
          <a href="./quizzes/html-quiz.html">
            <img src="./assets/images/icon-html.svg" alt="" srcset="" class="html-icon">
            <p class="subject--name">HTML</p>
          </a>
        </div>
        <div class="subject" id="css">
          <a href="./quizzes/css-quiz.html" class="css-link">
            <img src="./assets/images/icon-css.svg" alt="" srcset="" class="css-icon">
            <p class="subject--name">CSS</p>
          </a>
        </div>
        <div class="subject" id="javascript">
          <a href="./quizzes/js-quiz.html" class="js-link">
            <img src="./assets/images/icon-js.svg" alt="" srcset="" class="js-icon">
            <p class="subject--name">Javascript</p>
          </a>
        </div>
        <div class="subject" id="accessibility">
          <a href="./quizzes/accessibility-quiz.html" class="accessibility-link">
            <img src="./assets/images/icon-accessibility.svg" alt="" srcset="" class="accessibility-icon">
            <p class="subject--name">Accessibility</p>
          </a>
        </div>
      </div>
    </div>`
}

function getPageContent(page) {
    let contentToReturn;
    switch(page){
        case 'home': 
        contentToReturn = pages.home;
        break;
        case 'html': 
        contentToReturn = pages.html;
        break;
        case 'services': 
        contentToReturn = pages.services;
        break;
        case 'contact': 
        contentToReturn = pages.contact;
        break;
        default: 
        contentToReturn = pages.home;
        break;
    }
    document.getElementById('content').innerHTML = contentToReturn;
}


const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;

console.log(body);

darkModeToggle.addEventListener('change', () => {
    body.classList.toggle('dark-mode');
  });

/* <------------ Start Of Quiz Logic -------> */

const progressBar = document.querySelector(".question-bar-tracker .inner-bar");

console.log(progressBar);

const questionElement = document.querySelector("#question-container");
const scoreBoard = document.getElementById("score-board");
const answersWrapper = document.querySelector(".answers-wrapper");
const answerBtn = document.querySelector(".answers-list");
const nextBtn = document.getElementById("next-btn");
const currentQuestionEl = document.getElementById("current-question");
const totalQuestionEl = document.getElementById("total-question");

const questionCountTracker = document.getElementById("question-count-tracker");
const barTracker = document.getElementById("question-bar-tracker");
const quizMenu = document.querySelector(".quiz-menu");

let htmlQuiz = quizzes[0], cssQuiz = quizzes[1], jsQuiz = quizzes[2], accessibilityQuiz = quizzes[3];

let currentQuestionIndex = 0;
let score = 0;
let currentQuiz;


function startQuiz(i) {
    switch (i) {
        case 0:
            currentQuiz = htmlQuiz;
            break;
        case 1:
            currentQuiz = cssQuiz;
            break;
        case 2:
            currentQuiz = jsQuiz;
            break;
        case 3:
            currentQuiz = accessibilityQuiz;
            break;
        default:
            currentQuiz = htmlQuiz;
            break;
    }
    
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestion();

}

console.log(currentQuiz);

function showQuestion() {
    resetState();
    let totalQuestionCount = currentQuiz.questions.length;
    let currentQuestion = currentQuiz.questions[currentQuestionIndex];
    let correctAnswer = currentQuiz.questions[currentQuestionIndex].answer;
    let questionNumber = currentQuestionIndex + 1;
    questionElement.innerHTML = currentQuestion.question;

    currentQuestionEl.innerText = questionNumber;
    totalQuestionEl.innerText = totalQuestionCount;

    // console.log("Correct answer is: " + correctAnswer);

    currentQuestion.options.forEach((answer, index) => {
        const li = document.createElement("li");
        const span = document.createElement("span");
        let answerLettering = ["A", "B", "C", "D"];
        console.log(span)
        span.classList.add("question-label");
        span.innerText = answerLettering[index];
        li.classList.add("answer-btn");
        li.innerHTML = answer;
        li.prepend(span);
        answerBtn.appendChild(li);
        if(answer === correctAnswer) {
            li.dataset.correct = "true";
        }
        li.addEventListener('click', selectAnswer);

        

    })
}

function resetState() {
    nextBtn.style.display = "none";
    while (answerBtn.firstChild) {
        answerBtn.removeChild(answerBtn.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerBtn.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.classList.add("disabled");
        if(button.dataset.correct === "true"){
            button.classList.remove("disabled");
        }
    })
    nextBtn.style.display = "block";
}

console.log(scoreBoard);

function showScore() {
    resetState();
    questionCountTracker.style.display = "none";
    barTracker.style.display = "none";
    //quizMenu.style.cssText += 'grid-template-columns:unset; justify-content: center; align-items: center';
    scoreBoard.style.display = "flex";
    questionElement.innerHTML = `<div>Quiz completed</div><h1>You scored...</h1>`;
    scoreBoard.innerHTML += `
    <h1 style="font-size: 8rem;">${score}</h1>
    <div><p>out of ${10}</p></div>
    `;
    nextBtn.innerHTML = "Play Again";
    nextBtn.style.display = "block";
}


function handleNextBtn() {
    currentQuestionIndex++;
    if(currentQuestionIndex < currentQuiz.questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextBtn.addEventListener('click', () => {
    if(currentQuestionIndex < currentQuiz.questions.length) {
        handleNextBtn();
    } else {
        window.location = "/";
    }
})

const quizMenuStart = document.getElementById("quiz-menu");

// quizMenuStart.addEventListener(onload, startQuiz());
/* <------------ End Of Quiz Logic -------> */
