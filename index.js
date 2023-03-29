function calculateSIP(monthlyInvestment, expectedReturn, timePeriod, increasingAmount) {
  const monthlyRate = expectedReturn / 12 / 100;
  let totalAmount = 0;
  let increasingInvestment = monthlyInvestment;

  for (let i = 1; i <= timePeriod * 12; i++) {
    totalAmount += increasingInvestment;
    const interest = totalAmount * monthlyRate;
    totalAmount += interest;

    if (i % 12 === 0) {
      increasingInvestment += increasingAmount;
    }
  }

  return totalAmount.toFixed(2);
}
const monthlyInvestment = 5000;
const expectedReturn = 12;
const timePeriod = 10;
const increasingAmount = 000;

const totalAmount = calculateSIP(monthlyInvestment, expectedReturn, timePeriod, increasingAmount);

console.log(`Total amount after ${timePeriod} years: Rs. ${totalAmount}`);
