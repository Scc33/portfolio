"use client";

import { useState } from "react";

const MortgageCalc = () => {
    const [loanAmount, setLoanAmount] = useState<number>(0);
    const [interestRate, setInterestRate] = useState<number>(0);
    const [loanTerm, setLoanTerm] = useState<number>(0);
    const [monthlyPayment, setMonthlyPayment] = useState<string>("");

    const calculatePayment = () => {
        const rate = interestRate / 100 / 12;
        const n = loanTerm * 12;
        const payment = (loanAmount * rate) / (1 - Math.pow(1 + rate, -n));
        setMonthlyPayment(payment.toFixed(2));
    };

    return (
        <div className="max-w-md mx-auto bg-gray-800 shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
                Mortgage Calculator
            </h2>
            <div className="mb-4">
                <label className="block text-gray-300">Loan Amount</label>
                <input
                    type="number"
                    className="w-full px-3 py-2 border rounded-lg bg-gray-700 text-white"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(parseFloat(e.target.value))}
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-300">Interest Rate (%)</label>
                <input
                    type="number"
                    className="w-full px-3 py-2 border rounded-lg bg-gray-700 text-white"
                    value={interestRate}
                    onChange={(e) =>
                        setInterestRate(parseFloat(e.target.value))
                    }
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-300">Loan Term (years)</label>
                <input
                    type="number"
                    className="w-full px-3 py-2 border rounded-lg bg-gray-700 text-white"
                    value={loanTerm}
                    onChange={(e) => setLoanTerm(parseFloat(e.target.value))}
                />
            </div>
            <button
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
                onClick={calculatePayment}
            >
                Calculate
            </button>
            {monthlyPayment && (
                <div className="mt-4">
                    <h3 className="text-lg font-bold text-white">
                        Monthly Payment: ${monthlyPayment}
                    </h3>
                </div>
            )}
        </div>
    );
};

export default MortgageCalc;