import { useRef } from "react";
import { Currency } from "../../Constants";

interface CurrencyProps {
  currency: string;
  index: number;
  addCurrency: (name: string, id: number) => void;
  removeCurrency: (id: number) => void;
  selectedCurrencies: Currency[];
}

export default function CurriencyButton({
  currency,
  index,
  addCurrency,
  removeCurrency,
  selectedCurrencies,
}: CurrencyProps) {
  const ref = useRef<HTMLInputElement>(null);

  function handleChange() {
    if (ref.current?.checked) {
      addCurrency(currency, index);
    } else {
      removeCurrency(index);
    }
  }

  const isSelected = selectedCurrencies.find((item) => item.id === index);

  return (
    <label
      data-testid={`${currency}-btn`}
      key={index}
      className={`group flex w-full cursor-pointer items-center gap-2 overflow-hidden rounded-lg border border-gray-200 bg-gray-100 p-2 transition-all active:opacity-55 sm:w-36 ${
        isSelected
          ? "hover:border-red-400 hover:bg-red-50"
          : "hover:border-green-400 hover:bg-green-50"
      }`}
    >
      <div
        className={`flex aspect-square h-5 items-center justify-center rounded-full border transition-all group-hover:border-green-300 ${
          isSelected
            ? "bg-green-200 text-sm text-green-600 group-hover:border-red-300 group-hover:bg-red-100 group-hover:text-red-600"
            : "bg-white"
        }`}
      >
        {isSelected && <i className="ti ti-check "></i>}
      </div>
      <input
        ref={ref}
        type="checkbox"
        name="checkbox"
        hidden
        checked={typeof isSelected !== "undefined"}
        onChange={handleChange}
      />
      <p className="text-2xl">{currency}</p>
    </label>
  );
}
