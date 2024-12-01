// 변수 선언
let currentQuestionIndex = 0;
let score = 0;
let totalQuestions = 5;  // 예시로 5문제
const questions = [
    {
        question: "대한민국 청소년 중 최근 1년간 도박 경험이 있는 비율은 몇 %로 추정되는가?",
        options: ["약 1%", "약 5%", "약 10%", "약 20%"],
        answer: 2, // "약 10%"가 정답
        explanation: "최근 조사에 따르면, 청소년의 약 10%가 도박을 경험한 것으로 추정됩니다."
    },
    {
        question: "도박에서 “판돈”이란 무엇을 의미하는가?",
        options: ["도박에 참여하는 사람", "도박에 건 돈이나 재화", "도박이 이루어지는 장소", "도박 규칙"],
        answer: 1, // "도박에 건 돈이나 재화"가 정답
        explanation: "판돈은 도박에서 베팅되는 돈이나 재화입니다."
    },
    // 추가 문제들
];

// 퀴즈 시작 버튼 클릭 이벤트
document.getElementById("quizStartBtn").addEventListener("click", startQuiz);

function startQuiz() {
    document.getElementById("home").classList.add("hidden");
    document.getElementById("quizSection").classList.remove("hidden");
    showQuestion(currentQuestionIndex);
}

// 문제 표시 함수
function showQuestion(index) {
    const question = questions[index];
    document.getElementById("question").textContent = question.question;
    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = '';  // 기존 옵션들 지우기

    question.options.forEach((option, i) => {
        const optionButton = document.createElement("button");
        optionButton.textContent = option;
        optionButton.addEventListener("click", () => checkAnswer(i, question.answer, index));
        optionsContainer.appendChild(optionButton);
    });
}

// 정답 체크 함수
function checkAnswer(selected, correct, index) {
    const feedback = document.createElement("div");
    if (selected === correct) {
        score++;
        feedback.textContent = "정답입니다!";
    } else {
        feedback.textContent = "오답입니다!";
    }
    document.getElementById("quizContainer").appendChild(feedback);
    
    // 문제 종료 후 다음 문제로 이동
    if (index < totalQuestions - 1) {
        document.getElementById("nextQuestionBtn").classList.remove("hidden");
    } else {
        showFinalResult();
    }
}

// 다음 문제로 이동
document.getElementById("nextQuestionBtn").addEventListener("click", () => {
    currentQuestionIndex++;
    showQuestion(currentQuestionIndex);
    document.getElementById("nextQuestionBtn").classList.add("hidden");
});

// 최종 결과 화면
function showFinalResult() {
    document.getElementById("quizSection").classList.add("hidden");
    document.getElementById("home").classList.remove("hidden");
    alert(`퀴즈 완료! 당신의 점수는 ${score}점입니다.`);
}
