import { useState } from "react";
import AmortizationTable from "./AmortizationTable";

const currencySymbols = {
  INR: "₹",
  USD: "$",
  EUR: "€",
  GBP: "£",
};

export default function LoanCalculator() {
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");
  const [currency, setCurrency] = useState("INR");
  const [emi, setEmi] = useState(null);
  const [schedule, setSchedule] = useState([]);

  const calculateLoan = () => {
    const principal = parseFloat(amount);
    const annualRate = parseFloat(rate);
    const loanTermYears = parseFloat(years);

    const monthlyRate = annualRate / 12 / 100;
    const numberOfMonths = loanTermYears * 12;

    const emiCalc =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfMonths)) /
      (Math.pow(1 + monthlyRate, numberOfMonths) - 1);

    setEmi(emiCalc.toFixed(2));

    let balance = principal;
    const scheduleData = [];

    for (let i = 1; i <= numberOfMonths; i++) {
      const interest = balance * monthlyRate;
      const principalPaid = emiCalc - interest;
      balance -= principalPaid;

      scheduleData.push({
        month: i,
        emi: emiCalc.toFixed(2),
        interest: interest.toFixed(2),
        principal: principalPaid.toFixed(2),
        balance: balance > 0 ? balance.toFixed(2) : "0.00",
      });
    }

    setSchedule(scheduleData);
  };

  const currencySymbol = currencySymbols[currency];

  return (
    <div className="p-4 max-w-3xl mx-auto shadow rounded bg-white space-y-4">
      <h2 className="text-xl font-bold">Loan Calculator</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <input
          type="number"
          placeholder="Loan Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Interest Rate (%)"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Loan Term (Years)"
          value={years}
          onChange={(e) => setYears(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="INR">INR (₹)</option>
          <option value="USD">USD ($)</option>
          <option value="EUR">EUR (€)</option>
          <option value="GBP">GBP (£)</option>
        </select>
      </div>

      <button
        onClick={calculateLoan}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Calculate
      </button>

      {emi && (
        <div className="mt-4">
          <p className="font-semibold">
            Monthly EMI: {currencySymbol}
            {emi}
          </p>
          <AmortizationTable schedule={schedule} currencySymbol={currencySymbol} />
        </div>
      )}
    </div>
  );
}

