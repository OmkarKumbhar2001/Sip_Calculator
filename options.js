function calculateFutureValue(principal, annualRate, years) {
    annualRate /= 100; // Convert percentage to decimal
    return principal * Math.pow(1 + annualRate, years);
}

function calculateFutureSalary(initialSalary, incrementRate, years) {
    incrementRate /= 100; // Convert percentage to decimal
    return initialSalary * Math.pow(1 + incrementRate, years);
}

function investmentProjection(initialSalary, investmentRate, allocations, yearsArray, incrementRate, inflationRate) {
    const results = [];
    investmentRate /= 100; // Convert percentage to decimal
    inflationRate /= 100; // Convert percentage to decimal

    yearsArray.forEach(years => {
        const futureSalary = calculateFutureSalary(initialSalary, incrementRate, years);
        const monthlyInvestment = futureSalary * investmentRate;
        let totalFutureValue = 0;

        allocations.forEach(({ rate, percent }) => {
            percent /= 100; // Convert percentage to decimal
            const annualInvestment = monthlyInvestment * 12;
            const futureValue = calculateFutureValue(annualInvestment, rate, years);
            totalFutureValue += futureValue;
        });

        const realValue = totalFutureValue / Math.pow(1 + inflationRate, years); // Adjust for inflation
        results.push({
            Year: years,
            SalaryPerMonth: Math.round(futureSalary),
            InvestmentPerMonth: Math.round(monthlyInvestment),
            AmountInCrores: (totalFutureValue / 1e7).toFixed(2),
            TodaysPriceInCrores: (realValue / 1e7).toFixed(2)
        });
    });

    return results;
}

const allocations = [
    { rate: 15.9, percent: 40 },
    { rate: 21.38, percent: 30 },
    { rate: 29.96, percent: 30 }
];
const yearsArray = [10, 15, 20, 25, 30, 35, 40];
const result = investmentProjection(25000, 20, allocations, yearsArray, 5, 5);

console.log("After years\tSalary pm\tInvestment (pm)\tAmount (Cr)\tToday's price (Cr)");
result.forEach(entry => {
    console.log(`${entry.Year}\t\t${entry.SalaryPerMonth}\t\t${entry.InvestmentPerMonth}\t\t${entry.AmountInCrores}\t\t${entry.TodaysPriceInCrores}`);
});
