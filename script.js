// Security Tip API Code
const securityTips = [
  "Use strong and unique passwords for every account.",
  "Enable two-factor authentication wherever possible.",
  "Never share your passwords with anyone.",
  "Regularly update your software and applications.",
  "Avoid clicking on suspicious email links.",
  "Use a password manager to store your passwords.",
  "Do not reuse passwords across different websites.",
  "Always check website URLs before entering sensitive information.",
  "Use antivirus software and keep it updated.",
  "Lock your devices when not in use."
];

async function fetchCyberNews() {
  try {
    const response = await fetch("https://api.mediastack.com/v1/news?access_key=a65b4bbd3d36544e2c90a5a63e9b1d2f&keywords=cybersecurity&languages=en");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    if (data.data && data.data.length > 0) {
      const randomArticle = data.data[Math.floor(Math.random() * data.data.length)];
      const newsElement = document.getElementById("cyber-news");
      if (newsElement) {
        newsElement.innerHTML = `📰 Cyber News: <a href="${randomArticle.url}" target="_blank">${randomArticle.title}</a>`;
      }
    }
  } catch (error) {
    console.error("Failed to fetch news", error);
  }
}

function showRandomTip() {
  const tip = securityTips[Math.floor(Math.random() * securityTips.length)];
  const tipElement = document.getElementById("security-tip");
  if (tipElement) {
    tipElement.innerHTML = `💡 Security Tip: ${tip}`;
  }
}

function showClock() {
  const clockElement = document.getElementById("digital-clock");
  if (clockElement) {
    const now = new Date();
    const hours = now.getHours() % 12 || 12;
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    const ampm = now.getHours() >= 12 ? "PM" : "AM";
    clockElement.innerHTML = `${hours}:${minutes}:${seconds} ${ampm}`;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  showRandomTip();
  fetchCyberNews();
  showClock();
  setInterval(showRandomTip, 10000);
  setInterval(fetchCyberNews, 15000);
  setInterval(showClock, 1000);
});
