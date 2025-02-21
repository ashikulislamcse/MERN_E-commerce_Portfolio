import { useState } from "react";

const CurrencySwitcher = () => {
  const [currency, setCurrency] = useState("USD");
  const [isOpen, setIsOpen] = useState(false);

  const handleCurrencyChange = (curr) => {
    setCurrency(curr);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 text-gray-400 hover:text-gray-600 rounded-md focus:outline-none cursor-pointer"
      >
        {currency}▼
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-32 bg-white border rounded-md shadow-lg">
          <button
            onClick={() => handleCurrencyChange("USD")}
            className="block w-full px-4 py-2 text-center hover:bg-blue-500 hover:text-white cursor-pointer"
          >
            USD ($)
          </button>
          <button
            onClick={() => handleCurrencyChange("BDT")}
            className="block w-full px-4 py-2 text-center hover:bg-blue-500 hover:text-white cursor-pointer"
          >
            BDT (৳)
          </button>
        </div>
      )}
    </div>
  );
};

export default CurrencySwitcher;
