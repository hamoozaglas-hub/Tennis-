let score = Number(localStorage.getItem("score")) || 0;
const scoreEl = document.getElementById("score");

if (scoreEl) scoreEl.textContent = "Score: " + score;

function startGame() {
  const name = document.getElementById("playerName").value.trim();
  if (!name) return alert("Enter your name");
  localStorage.setItem("player", name);
  score = 0;
  save();
  alert("Opponent: AI Pro 🎾");
}

function hit() {
  score++;
  save();
}

function save() {
  localStorage.setItem("score", score);
  if (scoreEl) scoreEl.textContent = "Score: " + score;
}
