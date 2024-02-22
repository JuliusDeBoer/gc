<script setup type="ts">
	import { Bar } from 'vue-chartjs'

	const location = defineModel("location");
	const data = defineModel("data");

	data.value = {};

	const options = {
		size: {
			w: 600,
			h: 200
		},
		"marks": false,
		"bars": false,
		"axis": {
			"valuesY": true,
			"linesY": true,
			"linesX": true,
			"valuesX": true
		},
		"curve": {
			"type": "monotoneX",
			"stroke": "#D2134B",
			"style": {
				"stroke": "#2D8685",
				"stroke-width": 2,
				"size": 1
			}
		},
		"curveBack": {
			"close": true,
			"style": {
				"stroke": "none",
				"opacity": 0.5
			},
			"gradient": {
				"stroke": false,
				"fill": true
			}
		},
		"domain": {
			"min": 0
		},
		"colors": [
			"#2D8685"
		]
	};

	function go() {
		fetch(`api/forecast?q=${location.value}`)
			.then(raw => raw.json())
			.then(response => {
				const values = response.list.map(v => ({ x: v.main.temp, y: 5 }));

				console.log(values);

				data.value = values;
			})
			.catch(console.error);
	}
</script>

<template>
	<input type="text" placeholder="Location" class="input" v-model="location" />

	<br />

	<button class="btn btn-solid-primary" @click="go">GO</button>

	<Bar :data='data' :options='options' />
</template>
