'use client';

import { useState } from 'react';

export default function ROICalculator() {
  const [familySize, setFamilySize] = useState(4);
  const [bottledCost, setBottledCost] = useState(2);
  const [cleaningBudget, setCleaningBudget] = useState(50);

  // Calculations
  const dailyBottledCost = familySize * bottledCost;
  const monthlyBottledCost = dailyBottledCost * 30;
  const yearlyBottledCost = dailyBottledCost * 365;
  const yearlyCleaningCost = cleaningBudget * 12;
  const totalYearlyCost = yearlyBottledCost + yearlyCleaningCost;

  const k8Price = 5890;
  const yearlyElectricity = 150;
  const yearlyFilter = 100;
  const kangenYearlyCost = yearlyElectricity + yearlyFilter;

  const firstYearSavings = totalYearlyCost - (k8Price + kangenYearlyCost);
  const yearlyOngoingSavings = totalYearlyCost - kangenYearlyCost;
  const breakEvenMonths = Math.ceil((k8Price / (totalYearlyCost - kangenYearlyCost)) * 12);
  const fiveYearSavings = (yearlyOngoingSavings * 5) - k8Price;

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">💰 ROI Calculator</h2>
        <p className="text-gray-600">See how much you'll save with Kangen Water</p>
      </div>

      {/* Input Controls */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div>
          <label className="block font-semibold text-gray-900 mb-3">
            Family Size: <span className="text-kangen-blue">{familySize} people</span>
          </label>
          <input
            type="range"
            min="1"
            max="10"
            value={familySize}
            onChange={(e) => setFamilySize(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-kangen-blue"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>1</span>
            <span>10</span>
          </div>
        </div>

        <div>
          <label className="block font-semibold text-gray-900 mb-3">
            Daily Bottled Water Cost per Person: <span className="text-kangen-blue">${bottledCost}</span>
          </label>
          <input
            type="range"
            min="1"
            max="5"
            step="0.5"
            value={bottledCost}
            onChange={(e) => setBottledCost(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-kangen-blue"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>$1</span>
            <span>$5</span>
          </div>
        </div>

        <div>
          <label className="block font-semibold text-gray-900 mb-3">
            Monthly Cleaning Budget: <span className="text-kangen-blue">${cleaningBudget}</span>
          </label>
          <input
            type="range"
            min="20"
            max="200"
            step="10"
            value={cleaningBudget}
            onChange={(e) => setCleaningBudget(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-kangen-blue"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>$20</span>
            <span>$200</span>
          </div>
        </div>
      </div>

      {/* Results Display */}
      <div className="bg-gradient-to-br from-kangen-light to-blue-50 rounded-xl p-8 mb-6">
        <h3 className="text-xl font-bold mb-6 text-center">Your Savings Breakdown</h3>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Current Costs */}
          <div className="bg-white rounded-lg p-6">
            <h4 className="font-bold text-red-600 mb-4 flex items-center">
              <span className="text-2xl mr-2">❌</span>
              Current Annual Costs
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span>Bottled Water:</span>
                <span className="font-semibold">${yearlyBottledCost.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Cleaning Products:</span>
                <span className="font-semibold">${yearlyCleaningCost.toLocaleString()}</span>
              </div>
              <div className="flex justify-between pt-3 border-t-2 border-gray-200">
                <span className="font-bold">Total Per Year:</span>
                <span className="font-bold text-lg text-red-600">${totalYearlyCost.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Kangen Costs */}
          <div className="bg-white rounded-lg p-6">
            <h4 className="font-bold text-green-600 mb-4 flex items-center">
              <span className="text-2xl mr-2">✅</span>
              With Kangen Water
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span>K8 Machine (one-time):</span>
                <span className="font-semibold">${k8Price.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Annual Operating Cost:</span>
                <span className="font-semibold">${kangenYearlyCost}</span>
              </div>
              <div className="flex justify-between pt-3 border-t-2 border-gray-200">
                <span className="font-bold">Annual Cost (ongoing):</span>
                <span className="font-bold text-lg text-green-600">${kangenYearlyCost}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Savings Summary */}
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-lg p-6 text-center">
            <p className="text-sm mb-2 opacity-90">Break-Even Point</p>
            <p className="text-4xl font-bold mb-1">{breakEvenMonths}</p>
            <p className="text-sm">Months</p>
          </div>

          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-lg p-6 text-center">
            <p className="text-sm mb-2 opacity-90">Annual Savings (after Year 1)</p>
            <p className="text-4xl font-bold mb-1">${yearlyOngoingSavings.toLocaleString()}</p>
            <p className="text-sm">Per Year</p>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-pink-600 text-white rounded-lg p-6 text-center">
            <p className="text-sm mb-2 opacity-90">5-Year Total Savings</p>
            <p className="text-4xl font-bold mb-1">${fiveYearSavings.toLocaleString()}</p>
            <p className="text-sm">Over 5 Years</p>
          </div>
        </div>
      </div>

      {/* ROI Payback Timeline */}
      <div className="bg-white rounded-lg p-6 border-2 border-kangen-blue">
        <h3 className="text-xl font-bold mb-4 text-center">📈 ROI Payback Timeline</h3>
        <div className="overflow-x-auto">
          <div className="min-w-full">
            {[0, 1, 2, 3, 4, 5].map((year) => {
              const yearCost = year === 0
                ? k8Price + kangenYearlyCost
                : kangenYearlyCost;
              const yearlySavings = totalYearlyCost - yearCost;
              const cumulativeSavings = year === 0
                ? totalYearlyCost - k8Price - kangenYearlyCost
                : (totalYearlyCost - kangenYearlyCost) * year - k8Price;

              return (
                <div key={year} className="flex items-center gap-4 py-3 border-b border-gray-200 last:border-0">
                  <div className="w-20 font-bold text-kangen-blue">
                    Year {year}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-gray-600">
                        {year === 0 ? 'Initial Investment + Operating' : 'Operating Cost Only'}
                      </span>
                      <span className="font-semibold">${yearCost.toLocaleString()}</span>
                    </div>
                    {/* Progress bar */}
                    <div className="h-6 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full flex items-center justify-end pr-2 text-white text-xs font-bold transition-all duration-500 ${
                          cumulativeSavings >= 0 ? 'bg-green-500' : 'bg-orange-500'
                        }`}
                        style={{
                          width: `${Math.min(100, Math.max(0, ((cumulativeSavings + k8Price) / (k8Price + yearlyOngoingSavings * 5)) * 100))}%`
                        }}
                      >
                        {cumulativeSavings >= 0 ? `+$${cumulativeSavings.toLocaleString()}` : `-$${Math.abs(cumulativeSavings).toLocaleString()}`}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-4 text-center text-sm text-gray-600">
          <p>💡 The timeline shows your net savings each year after accounting for the K8 investment</p>
        </div>
      </div>

      <div className="mt-6 text-center">
        <p className="text-gray-600 mb-4">Ready to start saving?</p>
        <div className="flex gap-4 justify-center">
          <a
            href="https://leemeadows.ecokangen.com/en_US/shop/product/k8"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-kangen-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-kangen-darkblue transition-colors"
          >
            Buy K8 Now
          </a>
          <a
            href="/#contact"
            className="bg-gray-100 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
          >
            Schedule Demo
          </a>
        </div>
      </div>
    </div>
  );
}
