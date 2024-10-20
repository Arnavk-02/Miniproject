function calculateTaxCategory() {
    const income = document.getElementById('income').value;
    let resultText = '';
    let schemesText = '';

    if (income === '' || income < 0) {
        resultText = 'Please enter a valid income amount.';
        schemesText = ''; // Clear schemes text if invalid
    } else {
        if (income <= 250000) {
            resultText = 'You fall under the 0% tax bracket.';
            schemesText = 'Since your income is below ₹2.5 lakhs, you may not be liable for taxes. However, you can invest in: <ul><li>Public Provident Fund (PPF)</li><li>National Pension Scheme (NPS)</li><li>Tax-saving Fixed Deposits (FDs)</li></ul>';
        } else if (income > 250000 && income <= 500000) {
            resultText = 'You fall under the 5% tax bracket.';
            schemesText = 'You can reduce your taxable income by investing in the following schemes: <ul><li>Section 80C Investments (e.g., PPF, ELSS)</li><li>National Savings Certificate (NSC)</li><li>Health Insurance under Section 80D</li></ul>';
        } else if (income > 500000 && income <= 1000000) {
            resultText = 'You fall under the 20% tax bracket.';
            schemesText = 'Consider the following investments to maximize your tax savings: <ul><li>Employee Provident Fund (EPF)</li><li>National Pension Scheme (NPS)</li><li>Home Loan Interest Deduction (Section 24)</li></ul>';
        } else {
            resultText = 'You fall under the 30% tax bracket.';
            schemesText = 'To reduce your tax liability, you can invest in the following schemes: <ul><li>Equity Linked Savings Scheme (ELSS)</li><li>Section 80C Investments (e.g., PPF, NSC)</li><li>Tax Deduction on Home Loan Interest (Section 24)</li><li>National Pension Scheme (NPS)</li></ul>';
        }
    }

    document.getElementById('tax-suggestions').innerHTML = resultText + schemesText; // Update the tax suggestions box
}
