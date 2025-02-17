/*
* Currency Converter
*/
const currencyForm = document.getElementById('currencyForm');
const exchanges = {
    USD: { EUR: 0.92, JPY: 145.22, AUD: 1.55, RUB: 88.32 },
    EUR: { USD: 1.09, JPY: 158.05, AUD: 1.68, RUB: 96.03 },
    JPY: { USD: 0.0069, EUR: 0.0063, AUD: 0.011, RUB: 0.61 },
    AUD: { USD: 0.64, EUR: 0.59, JPY: 91.82, RUB: 57.62 },
    RUB: { USD: 0.011, EUR: 0.01, JPY: 1.64, AUD: 0.017 }
};
const flagImages = {
    USD: './img/us.png',
    EUR: './img/eu.png',
    JPY: './img/jp.png',
    AUD: './img/au.png',
    RUB: './img/ru.png'
};

function currExchange(event) {
    event.preventDefault();

    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const error = document.getElementById('error');

    if (isNaN(amount) || amount <= 0 || amount == '') {
        error.innerText = 'Please enter a valid amount.';
        return;
    }

    const resultsContainer = document.getElementById('conversionResults');
    resultsContainer.innerHTML = '';

    const exchangeRates = exchanges[fromCurrency];

    // Loopear sobre cada moneda de destino y su tasa de cambio
    for (const toCurrency in exchangeRates) {
        const rate = exchangeRates[toCurrency];
        const convertedAmount = (amount * rate).toFixed(4);

        // Crear un div para mostrar el resultado
        const resultBox = document.createElement('div');
        resultBox.classList.add('result-box');

        // Agregar la imagen de la bandera ya mapeada
        const flagImage = document.createElement('img');
        flagImage.src = flagImages[toCurrency];
        flagImage.alt = `${toCurrency} Flag`;
        flagImage.classList.add('flag-image');

        // Agregar el contenido al HTML
        resultBox.innerHTML = `
            <strong>${convertedAmount} ${toCurrency}</strong>
            <span>${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}</span>
        `;

        resultBox.prepend(flagImage);

        resultsContainer.appendChild(resultBox);
    }
}

currencyForm.addEventListener('submit', currExchange);