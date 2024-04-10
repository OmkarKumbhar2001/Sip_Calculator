function calculateSIP(monthlyInvestment, expectedReturn, timePeriod, increasingAmount) {
    const monthlyRate = expectedReturn / 12 / 100;
    let totalAmount = 0;
    let increasingInvestment = monthlyInvestment;
    let invested_amount = 0;

    for (let i = 1; i <= timePeriod * 12; i++) {
        totalAmount += increasingInvestment; // Add current month's investment to total
        const interest = totalAmount * monthlyRate; // Calculate interest for the current month
        totalAmount += interest; // Add interest to total amount
        invested_amount += increasingInvestment; // Accumulate the invested amount

        console.log(`Total amount invested per month in month ${i}: ${increasingInvestment}`);

        if (i % 12 === 0) {
            increasingInvestment += increasingAmount; // Increase the monthly investment every year
            console.log(`Total investment at the end of year ${i / 12}: ${invested_amount.toFixed(2)}`);
        }
    }

    return { totalAmount: totalAmount.toFixed(2), invested_amount: invested_amount.toFixed(2) };
}

const monthlyInvestment = 4000;
const expectedReturn = 8;
const timePeriod = 10;
const increasingAmount = 1000;

const result = calculateSIP(monthlyInvestment, expectedReturn, timePeriod, increasingAmount);

console.log(`Total amount after ${timePeriod} years: Rs. ${result.totalAmount}`);
console.log(`Total invested amount after ${timePeriod} years: Rs. ${result.invested_amount}`);
