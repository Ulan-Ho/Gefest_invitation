const slider = document.getElementById("year-slider");
const resultDiv = document.getElementById("result");

slider.addEventListener("input", updateResult);

function updateResult() {
    const selectedYear = parseInt(slider.value);
    const baseSalary = 400000; // минимальная зарплата в тенге
    const salaryIncrease = 240000; // увеличение зарплаты за каждый год

    const totalSalary = baseSalary + (selectedYear - 2005) * salaryIncrease;
    const totalSalaryUSD = totalSalary / 420; // примерный курс валюты

    resultDiv.innerHTML = `
    Если бы вы начали в ${selectedYear} году, ваш заработок составил бы:
    ${totalSalary} тенге в месяц (${totalSalaryUSD.toFixed(2)} долларов).
    `;
}
