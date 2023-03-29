function calculateSIP(monthlyInvestment, expectedReturn, timePeriod, increasingAmount) {
    const monthlyRate = expectedReturn / 12 / 100;
    let totalAmount = 0;
    let increasingInvestment = monthlyInvestment;
    let invested_amount = 0;
    for (let i = 1; i <= timePeriod * 12; i++) {
        totalAmount += increasingInvestment;
        const interest = totalAmount * monthlyRate;
        totalAmount += interest;
        invested_amount += monthlyInvestment;

        if (i % 12 === 0) {
            increasingInvestment += increasingAmount;
            console.log(`total investment Each Year Months ${i}==> ${invested_amount.toFixed(2)}`)
            invested_amount += increasingAmount;
        }
    }
    return totalAmount.toFixed(2);
}
const monthlyInvestment = 4000;
const expectedReturn = 8;
const timePeriod = 10;
const increasingAmount = 1000;

const totalAmount = calculateSIP(monthlyInvestment, expectedReturn, timePeriod, increasingAmount);

console.log(`Total amount after ${timePeriod} years: Rs. ${totalAmount}`);
