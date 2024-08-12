function convert() {
    const temperatureInput = document.getElementById("textBox");
    const result = document.getElementById("result");
    const toFahrenheit = document.getElementById("toFahrenheit");
    
    let temperature = parseFloat(temperatureInput.value);
    let convertedTemperature;
    let unit;

    if (toFahrenheit.checked) {
        convertedTemperature = (temperature * 9/5) + 32;
        unit = "°F";
    } else {
        convertedTemperature = (temperature - 32) * 5/9;
        unit = "°C";
    }

    result.textContent = `Converted temperature: ${convertedTemperature.toFixed(2)}${unit}`;
}
