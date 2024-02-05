const queryInput = document.querySelector("#query");
const keyInput = document.querySelector("#api");
const image = document.querySelector("#image");
const canvas = document.querySelector("#canvas");
const error = document.querySelector("#err");

function getWeather() {
	const apiKey = keyInput.value;
	const query = queryInput.value;

	fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=${apiKey}&units=metric`)
		.then(raw => raw.json())
		.then(v => {
			if (v.cod != 200) {
				error.innerText = `ERROR: ${v.message}`;
				return;
			}

			error.innerText = "";

			// This does not work. I give up
			const ctx = canvas.getContext('2d');
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			render(v);
		});
}

function render(data) {
	const ctx = canvas.getContext("2d");
	const step = canvas.width / data.cnt;

	ctx.moveTo(0, data.list[0].main.temp);

	data.list.forEach((value, index) => {
		ctx.lineTo(index * step, value.main.temp / 0.1);
	});

	// POV: Me rn
	ctx.stroke();
}
