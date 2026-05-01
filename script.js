const chakras = [
  {
    id: "root",
    name: "海底輪",
    theme: "安全感與穩定",
    question: "我感覺穩定，能安心處理日常節奏。",
    color: "#9f3d2f",
    crystals: ["黑曜石", "煙晶", "紅碧玉"],
    practice: "把注意力放回身體，整理桌面或做三次深呼吸。"
  },
  {
    id: "sacral",
    name: "臍輪",
    theme: "情緒流動與創造力",
    question: "我能自在感受情緒，也願意讓創意流動。",
    color: "#c8742a",
    crystals: ["月光石", "橙方解石", "紅玉髓"],
    practice: "留十分鐘做一件沒有成果壓力的小創作。"
  },
  {
    id: "solar",
    name: "太陽神經叢",
    theme: "自信與行動力",
    question: "我相信自己的選擇，並能把想法付諸行動。",
    color: "#c99a20",
    crystals: ["黃水晶", "虎眼石", "黃方解石"],
    practice: "完成一件拖延很久的小事，讓身體記住前進感。"
  },
  {
    id: "heart",
    name: "心輪",
    theme: "信任與溫柔連結",
    question: "我能相信別人，也願意接收關心。",
    color: "#4a8f72",
    crystals: ["粉水晶", "綠東陵", "孔雀石"],
    practice: "對自己說一句真正柔軟的話，再傳給一個你在乎的人。"
  },
  {
    id: "throat",
    name: "喉輪",
    theme: "表達與界線",
    question: "我能清楚說出需要、想法與界線。",
    color: "#16858d",
    crystals: ["藍紋瑪瑙", "海藍寶", "青金石"],
    practice: "寫下今天最想說清楚的一句話，先讓它存在紙上。"
  },
  {
    id: "thirdEye",
    name: "眉心輪",
    theme: "直覺與洞察",
    question: "我願意相信直覺，也能看見事情背後的脈絡。",
    color: "#4f65b7",
    crystals: ["紫水晶", "螢石", "青金石"],
    practice: "關掉通知五分鐘，觀察腦中最先浮現的答案。"
  },
  {
    id: "crown",
    name: "頂輪",
    theme: "方向感與靈性連結",
    question: "我感覺自己與更大的生命方向相連。",
    color: "#7758b8",
    crystals: ["透明水晶", "白水晶", "透石膏"],
    practice: "在安靜處坐一會兒，讓今天不用急著被定義。"
  }
];

const questionList = document.querySelector("#questionList");
const quizForm = document.querySelector("#quizForm");
const resetButton = document.querySelector("#resetButton");
const resultPanel = document.querySelector("#resultPanel");
const resultTitle = document.querySelector("#resultTitle");
const resultCards = document.querySelector("#resultCards");
const averageScore = document.querySelector("#averageScore");

function renderQuestions() {
  questionList.innerHTML = chakras.map((chakra) => {
    return `
      <div class="question-row" style="--chakra-color: ${chakra.color}">
        <div class="question-top">
          <label class="question-label" for="${chakra.id}">
            <span class="chakra-name">${chakra.name}｜${chakra.theme}</span>
            <span class="question-text">${chakra.question}</span>
          </label>
          <span class="score-pill" id="${chakra.id}Score">3</span>
        </div>
        <div class="range-wrap">
          <input
            type="range"
            min="1"
            max="5"
            value="3"
            step="1"
            id="${chakra.id}"
            name="${chakra.id}"
            aria-describedby="${chakra.id}Scale"
          >
          <div class="range-scale" id="${chakra.id}Scale">
            <span>比較低</span>
            <span>很充足</span>
          </div>
        </div>
      </div>
    `;
  }).join("");

  questionList.querySelectorAll("input[type='range']").forEach((range) => {
    range.addEventListener("input", updateScores);
  });

  updateScores();
}

function updateScores() {
  const values = getScores();
  const average = values.reduce((total, item) => total + item.score, 0) / values.length;

  values.forEach(({ id, score }) => {
    const scoreLabel = document.querySelector(`#${id}Score`);
    const range = document.querySelector(`#${id}`);
    const fill = `${((score - 1) / 4) * 100}%`;

    scoreLabel.textContent = score;
    range.style.setProperty("--fill", fill);
  });

  averageScore.textContent = average.toFixed(1);
}

function getScores() {
  return chakras.map((chakra) => {
    const input = document.querySelector(`#${chakra.id}`);
    return {
      ...chakra,
      score: Number(input.value)
    };
  });
}

function buildResultCard(chakra) {
  const crystalItems = chakra.crystals.map((crystal) => `<li>${crystal}</li>`).join("");

  return `
    <article class="result-card" style="--result-color: ${chakra.color}">
      <h3>${chakra.name}：${chakra.theme}</h3>
      <p>分數 ${chakra.score} / 5。建議把注意力放在「${chakra.theme}」，搭配能量較穩定、溫柔的日常儀式。</p>
      <ul class="gem-list" aria-label="${chakra.name}建議水晶">
        ${crystalItems}
      </ul>
      <p>${chakra.practice}</p>
    </article>
  `;
}

function showResults(event) {
  event.preventDefault();

  const sorted = getScores().sort((a, b) => a.score - b.score);
  const lowScores = sorted.filter((chakra) => chakra.score <= 2);
  const selected = lowScores.length ? lowScores : sorted.slice(0, 2);
  const isBalanced = lowScores.length === 0;

  resultTitle.textContent = isBalanced
    ? "整體能量很平衡，保留最需要滋養的兩處"
    : "今日需要優先照顧的能量";

  resultCards.innerHTML = selected.map(buildResultCard).join("");
  resultPanel.hidden = false;
  resultPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

function resetQuiz() {
  questionList.querySelectorAll("input[type='range']").forEach((range) => {
    range.value = "3";
  });

  resultPanel.hidden = true;
  updateScores();
}

renderQuestions();
quizForm.addEventListener("submit", showResults);
resetButton.addEventListener("click", resetQuiz);
