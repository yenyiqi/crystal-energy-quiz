const SHOP_URL = "https://myship.7-11.com.tw/general/detail/GM2604268261360";

const chakraProfiles = {
  root: {
    name: "海底輪",
    theme: "安全感與穩定",
    color: "#8f5b45",
    soft: "rgba(143, 91, 69, 0.12)",
    crystals: ["黑曜石", "煙晶", "紅碧玉"],
    practice: "今天先把節奏放慢，整理一個角落，讓身體重新感覺到安定。"
  },
  sacral: {
    name: "臍輪",
    theme: "情緒流動與創造力",
    color: "#b8785f",
    soft: "rgba(184, 120, 95, 0.13)",
    crystals: ["月光石", "橙方解石", "紅玉髓"],
    practice: "留一段沒有成果壓力的時間，讓情緒和靈感自然流動。"
  },
  solar: {
    name: "太陽神經叢",
    theme: "自信與行動力",
    color: "#a98645",
    soft: "rgba(169, 134, 69, 0.14)",
    crystals: ["黃水晶", "虎眼石", "黃方解石"],
    practice: "選一件可以立刻完成的小事，重新建立對自己的信任感。"
  },
  heart: {
    name: "心輪",
    theme: "信任與溫柔連結",
    color: "#7f8f70",
    soft: "rgba(127, 143, 112, 0.14)",
    crystals: ["粉水晶", "綠東陵", "孔雀石"],
    practice: "把注意力放在願意接收愛的那一面，先對自己說一句柔軟的話。"
  },
  throat: {
    name: "喉輪",
    theme: "表達與界線",
    color: "#748b87",
    soft: "rgba(116, 139, 135, 0.14)",
    crystals: ["藍紋瑪瑙", "海藍寶", "青金石"],
    practice: "寫下最想說清楚的一句話，讓界線先在紙上變得明確。"
  },
  thirdEye: {
    name: "眉心輪",
    theme: "直覺與洞察",
    color: "#756f92",
    soft: "rgba(117, 111, 146, 0.13)",
    crystals: ["紫水晶", "螢石", "青金石"],
    practice: "關掉通知幾分鐘，觀察腦中第一個浮現的答案。"
  },
  crown: {
    name: "頂輪",
    theme: "方向感與靈性連結",
    color: "#9b7f72",
    soft: "rgba(155, 127, 114, 0.13)",
    crystals: ["透明水晶", "白水晶", "透石膏"],
    practice: "給自己一段不急著定義的安靜，讓方向感慢慢浮現。"
  }
};

const questions = [
  { id: "q1", chakra: "root", simple: true, text: "我最近感覺穩定，能安心處理日常節奏。" },
  { id: "q2", chakra: "root", simple: true, text: "面對變動時，我仍能讓自己回到安全感。" },
  { id: "q3", chakra: "root", simple: false, text: "我的睡眠、飲食或身體狀態大致讓我感到被支持。" },
  { id: "q4", chakra: "root", simple: false, text: "我能清楚安排金錢、工作與生活中的基本需求。" },
  { id: "q5", chakra: "sacral", simple: true, text: "我能允許自己感受情緒，而不是立刻壓下來。" },
  { id: "q6", chakra: "sacral", simple: true, text: "我最近仍然感覺得到喜歡、好奇與創造力。" },
  { id: "q7", chakra: "sacral", simple: false, text: "我能自在享受生活中的美感、關係或身體感受。" },
  { id: "q8", chakra: "solar", simple: true, text: "我相信自己的選擇，也願意為它採取行動。" },
  { id: "q9", chakra: "solar", simple: true, text: "當事情需要決定時，我不會一直否定自己的判斷。" },
  { id: "q10", chakra: "solar", simple: false, text: "我能把想法拆成步驟，並穩定推進。" },
  { id: "q11", chakra: "solar", simple: false, text: "我最近對自己的能力有踏實的信心。" },
  { id: "q12", chakra: "heart", simple: true, text: "我能相信別人，也願意接收關心。" },
  { id: "q13", chakra: "heart", simple: true, text: "我願意用溫柔的方式理解自己的脆弱。" },
  { id: "q14", chakra: "heart", simple: false, text: "我能在關係中保持開放，同時不過度勉強自己。" },
  { id: "q15", chakra: "heart", simple: false, text: "想到重要的人時，我感覺連結多於防備。" },
  { id: "q16", chakra: "throat", simple: true, text: "我能清楚說出自己的需要、想法與界線。" },
  { id: "q17", chakra: "throat", simple: true, text: "我說話時不太需要討好，也不會刻意壓抑。" },
  { id: "q18", chakra: "throat", simple: false, text: "我能用合適的語氣表達真實感受。" },
  { id: "q19", chakra: "thirdEye", simple: true, text: "我願意相信直覺，也能看見事情背後的脈絡。" },
  { id: "q20", chakra: "thirdEye", simple: true, text: "我最近能分辨哪些聲音是直覺，哪些只是焦慮。" },
  { id: "q21", chakra: "thirdEye", simple: false, text: "我能從重複出現的情緒或事件中看見提醒。" },
  { id: "q22", chakra: "crown", simple: true, text: "我感覺自己與更大的生命方向相連。" },
  { id: "q23", chakra: "crown", simple: true, text: "我願意在不確定裡保持信任，而不是急著控制一切。" },
  { id: "q24", chakra: "crown", simple: false, text: "我能感覺到某種支持，提醒自己不是孤單前進。" },
  { id: "q25", chakra: "crown", simple: true, text: "我知道此刻最需要放下或重新平衡的是什麼。" }
];

const modePanel = document.querySelector("#modePanel");
const quizPanel = document.querySelector("#quizPanel");
const resultPanel = document.querySelector("#resultPanel");
const questionList = document.querySelector("#questionList");
const quizForm = document.querySelector("#quizForm");
const resetButton = document.querySelector("#resetButton");
const changeModeButton = document.querySelector("#changeModeButton");
const resultCards = document.querySelector("#resultCards");
const resultTitle = document.querySelector("#resultTitle");
const resultSummary = document.querySelector("#resultSummary");
const modeLabel = document.querySelector("#modeLabel");
const questionCount = document.querySelector("#questionCount");
const progressText = document.querySelector("#progressText");
const progressBar = document.querySelector("#progressBar");
const shopLink = document.querySelector(".shop-link");

let activeMode = null;
let activeQuestions = [];

shopLink.href = SHOP_URL;

function startMode(mode) {
  activeMode = mode;
  activeQuestions = mode === "simple"
    ? questions.filter((question) => question.simple)
    : [...questions];

  modeLabel.textContent = mode === "simple" ? "簡易版" : "精準版";
  questionCount.textContent = `${activeQuestions.length} 題`;
  modePanel.hidden = true;
  quizPanel.hidden = false;
  resultPanel.hidden = true;
  renderQuestions();
  updateProgress();
  quizPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderQuestions() {
  questionList.innerHTML = activeQuestions.map((question, index) => {
    const chakra = chakraProfiles[question.chakra];

    return `
      <article class="question-card" style="--chakra-color: ${chakra.color}; --chakra-soft: ${chakra.soft}">
        <div class="question-head">
          <label class="question-label" for="${question.id}">
            <span class="chakra-chip">${index + 1}. ${chakra.name}</span>
            <span class="question-text">${question.text}</span>
          </label>
          <span class="score-pill" id="${question.id}Score">3</span>
        </div>
        <div class="range-field">
          <input
            type="range"
            min="1"
            max="5"
            value="3"
            step="1"
            id="${question.id}"
            name="${question.id}"
            aria-label="${question.text}"
            aria-describedby="${question.id}Scale"
          >
          <div class="range-scale" id="${question.id}Scale">
            <span>比較不符合</span>
            <span>非常符合</span>
          </div>
        </div>
      </article>
    `;
  }).join("");

  questionList.querySelectorAll("input[type='range']").forEach((range) => {
    range.addEventListener("input", () => {
      updateRange(range);
      updateProgress();
    });
    updateRange(range);
  });
}

function updateRange(range) {
  const scoreLabel = document.querySelector(`#${range.id}Score`);
  const fill = `${((Number(range.value) - 1) / 4) * 100}%`;

  scoreLabel.textContent = range.value;
  range.style.setProperty("--fill", fill);
}

function updateProgress() {
  const total = activeQuestions.length;
  const moved = activeQuestions.filter((question) => {
    const input = document.querySelector(`#${question.id}`);
    return input && input.value !== "3";
  }).length;
  const percent = total ? Math.round((moved / total) * 100) : 0;

  progressText.textContent = `已調整 ${moved} / ${total}`;
  progressBar.style.width = `${percent}%`;
}

function getScores() {
  return activeQuestions.reduce((scores, question) => {
    const input = document.querySelector(`#${question.id}`);
    const value = Number(input.value);

    if (!scores[question.chakra]) {
      scores[question.chakra] = [];
    }

    scores[question.chakra].push(value);
    return scores;
  }, {});
}

function getRankedChakras() {
  const scores = getScores();

  return Object.entries(chakraProfiles)
    .map(([id, profile]) => {
      const values = scores[id] || [];
      const average = values.length
        ? values.reduce((total, value) => total + value, 0) / values.length
        : 5;

      return {
        id,
        ...profile,
        average: Number(average.toFixed(1))
      };
    })
    .sort((a, b) => a.average - b.average);
}

function buildResultCard(chakra, index) {
  const crystalItems = chakra.crystals.map((crystal) => `<li>${crystal}</li>`).join("");

  return `
    <article class="result-card" style="--result-color: ${chakra.color}; --result-soft: ${chakra.soft}">
      <p class="result-score">No. ${index + 1}｜平均 ${chakra.average} / 5</p>
      <h3>${chakra.name}：${chakra.theme}</h3>
      <p>這一區的分數相對較低，代表它正在提醒你：可以多一點照顧、多一點停下來聽自己。</p>
      <ul class="gem-list" aria-label="${chakra.name}建議水晶">
        ${crystalItems}
      </ul>
      <p>${chakra.practice}</p>
    </article>
  `;
}

function showResults(event) {
  event.preventDefault();

  const ranked = getRankedChakras();
  const selected = ranked.slice(0, 3);
  const modeText = activeMode === "simple" ? "15 題簡易版" : "25 題精準版";

  resultTitle.textContent = "今日最需要被照顧的能量";
  resultSummary.textContent = `這是根據${modeText}整理出的前三個脈輪狀態，越前面代表越適合先被溫柔照顧。`;
  resultCards.innerHTML = selected.map(buildResultCard).join("");
  resultPanel.hidden = false;
  resultPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

function resetToModeChoice() {
  activeMode = null;
  activeQuestions = [];
  questionList.innerHTML = "";
  resultCards.innerHTML = "";
  modePanel.hidden = false;
  quizPanel.hidden = true;
  resultPanel.hidden = true;
  modePanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

document.querySelectorAll("[data-mode]").forEach((button) => {
  button.addEventListener("click", () => startMode(button.dataset.mode));
});

quizForm.addEventListener("submit", showResults);
resetButton.addEventListener("click", resetToModeChoice);
changeModeButton.addEventListener("click", resetToModeChoice);
