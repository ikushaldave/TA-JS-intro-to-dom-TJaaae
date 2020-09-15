const hourHand = document.querySelector(".hour-hand");
const minHand = document.querySelector(".minute-hand");
const secHand = document.querySelector(".second-hand");

function renderClock() {
	const now = new Date();
	secHand.style.transform = `rotate(${(now.getSeconds() / 60) * 360 + 90}deg)`;
	minHand.style.transform = `rotate(${(now.getMinutes() / 60) * 360 + 90}deg)`;
	hourHand.style.transform = `rotate(${(now.getHours() / 12) * 360 + 90}deg)`;
}

setInterval(renderClock, 1000);
