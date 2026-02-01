function yesClick() {
  document.getElementById("response").innerText =
    "YAYYY 💞 You just made my day!";
}

function moveNo() {
  const noBtn = document.getElementById("no");
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}
