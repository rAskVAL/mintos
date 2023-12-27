import { useState } from "react";
import { Currency, currencies } from "../../Constants";
import CurrencyTag from "./CurrencyTag";
import CurriencyButton from "./CurrencyButton";

export default function CurrencySelector() {
  const [selectedCurrencies, setSelectedCurrencies] = useState<Currency[]>([]);

  function addCurrency(name: string, index: number): void {
    setSelectedCurrencies((curr) => [...curr, { name: name, id: index }]);
  }

  function removeCurrency(index: number): void {
    setSelectedCurrencies((curr) => curr.filter((item) => index !== item.id));
  }

  return (
    <div
      data-testid="CurrencyComponent"
      className="flex h-full w-full flex-col justify-between rounded-xl border border-gray-200 bg-gray-50 p-4 sm:h-96 sm:w-fit"
    >
      {selectedCurrencies.length > 0 ? (
        <div className="grid w-full grid-cols-2 gap-2 sm:grid-cols-3">
          {selectedCurrencies.map((currency) => (
            <CurrencyTag
              key={currency.id}
              currency={currency}
              removeCurrency={removeCurrency}
            />
          ))}
        </div>
      ) : (
        <div className="flex h-full items-center justify-center text-base text-gray-400">
          <p>Please select currency</p>
        </div>
      )}
      <div className="grid w-full grid-cols-2 gap-2 sm:grid-cols-3">
        {currencies.map((curriency: string, index: number) => (
          <CurriencyButton
            key={index}
            addCurrency={addCurrency}
            removeCurrency={removeCurrency}
            selectedCurrencies={selectedCurrencies}
            currency={curriency}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
