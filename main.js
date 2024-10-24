// const apiKey = "d6c66ceb0da0e8cc57b740f3372f50cd";
// const apiUrl = fetch("https://api.openweathermap.org/data/2.5/weather?q=chennai&appid=d6c66ceb0da0e8cc57b740f3372f50cd")

// apiUrl.then((response) => {
// 	return response.json()
// })
// 	.then((data) => {
// 		console.log(data)
// 	})
// 	.catch((error) => {
// 		console.log(error)
// 	})
// 	.finally(() => {
// 		console.log("API call completed")
// 	})


const apikey = "d6c66ceb0da0e8cc57b740f3372f50cd"
const apilink = "https://api.openweathermap.org/data/2.5/weather?&appid=d6c66ceb0da0e8cc57b740f3372f50cd&units=metric&q="
let search = document.querySelector(".search")
let searchbtn = document.querySelector(".searchbtn")
let weatherimg = document.querySelector(".weatherimg")
console.log(search.value)

async function checkweather(city) {
	const response = await fetch(apilink + city + `&appid=${apikey}`)
	var data = await response.json()
	console.log(data)

	document.querySelector(".city").innerHTML = data.name
	document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c"
	document.querySelector(".huminity").innerHTML = data.main.humidity + "%"
	document.querySelector(".wind").innerHTML = data.wind.speed + "km/h"
	if (data.weather[0].main == "Clouds") {
		weatherimg.src = "weather-app-img/images/clouds.png"
		return
	}
	else if (data.weather[0].main == "Clear") {
		weatherimg.src = "weather-app-img/images/clear.png"
	}
	else if (data.weather[0].main == "Rain") {
		weatherimg.src = "weather-app-img/images/rain.png"
	}
	else if (data.weather[0].main == "Dirzzle") {
		weatherimg.src = "weather-app-img/images/drizzle.png"
	}
	else if (data.weather[0].main == "Mist") {
		weatherimg.src = "weather-app-img/images/mist.png"
	}

}

searchbtn.addEventListener("click", () => {


	checkweather(search.value)
	// checkweather(search.value)
})