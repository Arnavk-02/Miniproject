function calculateTaxCategory() {
    const income = document.getElementById('income').value;
    let resultText = '';

    // Get the div where the tax bracket message will be displayed
    const taxMessage = document.getElementById('tax-message');

    if (income === '' || isNaN(income) || income < 0) {
        resultText = 'Please enter a valid income amount.';
    } else {
        if (income <= 250000) {
            resultText = 'You fall under the 0% tax bracket.';
        } else if (income > 250000 && income <= 500000) {
            resultText = 'You fall under the 5% tax bracket.';
        } else if (income > 500000 && income <= 1000000) {
            resultText = 'You fall under the 20% tax bracket.';
        } else {
            resultText = 'You fall under the 30% tax bracket.';
        }
    }

    // Update the message div with the resultText
    taxMessage.innerHTML = resultText;
}
