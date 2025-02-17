/*
* Currency Converter
*/
const currencyForm = document.getElementById('currencyForm')
const exchanges = {
    USD: { JPY: 152.00, EUR: 0.95, AUD: 1.50, RUB: 90.00 },
    EUR: { USD: 1.05, JPY: 150.00, AUD: 1.60, RUB: 95.00 },
    JPY: { USD: 0.0069, EUR: 0.0067, AUD: 0.011, RUB: 0.63 },
    AUD: { USD: 0.67, EUR: 0.63, JPY: 91.00, RUB: 58.00 },
    RUB: { USD: 0.011, EUR: 0.011, JPY: 1.60, AUD: 0.017 }
};

function currExchange(event){
    event.preventDefault();

    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    const error = document.getElementById('error');

    if (isNaN(amount) || amount <= 0 || amount == '') {
        error.innerText = 'Please enter a valid amount.';
        return;
    }

    const rates = exchanges[fromCurrency][toCurrency];
    const ratesInverted = exchanges[toCurrency][fromCurrency];


    if (!rates) {
        document.getElementById('result').textContent = 'Conversion not available';
        return;

    }

    const converting = amount * rates;
    const convertingInverted = amount * ratesInverted;

    document.getElementById('result').textContent = `${amount} ${fromCurrency} = ${converting} ${toCurrency}`;
    document.getElementById('resultInverted').textContent = `${amount} ${toCurrency} = ${convertingInverted} ${fromCurrency}`;
}

currencyForm.addEventListener('submit', currExchange)
