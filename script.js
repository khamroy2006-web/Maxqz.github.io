const quiz = [
  {
    q: "1kΩ สีอะไร?",
    a: ["น้ำตาล-ดำ-แดง", "แดง-แดง-แดง", "เหลือง-ม่วง-แดง"],
    c: 0
  },
  {
    q: "Ohm’s law คืออะไร?",
    a: ["V=IR", "I=R/V", "P=R/I"],
    c: 0
  }
];

let current = 0;
let score = 0;

const qEl = document.getElementById("question");
const aEl = document.getElementById("answers");
const nextBtn = document.getElementById("next");

function load() {
  const data = quiz[current];
  qEl.innerText = data.q;
  aEl.innerHTML = "";

  data.a.forEach((ans, i) => {
    const btn = document.createElement("button");
    btn.innerText = ans;
    btn.onclick = () => select(btn, i);
    aEl.appendChild(btn);
  });
}

function select(btn, i) {
  const correct = quiz[current].c;

  if (i === correct) {
    btn.classList.add("correct");
    score++;
  } else {
    btn.classList.add("wrong");
  }
}

nextBtn.onclick = () => {
  current++;
  if (current < quiz.length) {
    load();
  } else {
    qEl.innerText = "จบแล้ว! ได้ " + score + " คะแนน";
    aEl.innerHTML = "";
    nextBtn.style.display = "none";
  }
};

load();
