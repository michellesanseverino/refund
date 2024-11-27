// Select the elements in the HTML file
const amount = document.getElementById('amount');

// Add an event listener to the input field
amount.oninput = () => {
    // Remove all non-numeric characters from the input field
    let value = amount.value.replace(/\D/g, '');

    //Transform the value into cents, (e.g. 1000 becomes 10.00)
    value = Number(value) / 100;

    amount.value = formatCurrencyBRL(value);
}

// Function to format the currency in BRL
function formatCurrencyBRL (value) {
    value = value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })

    return value;
}