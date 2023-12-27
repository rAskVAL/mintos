import { type Currency } from "../../Constants";

interface CurrencyTag {
  currency: Currency;
  removeCurrency: (id: number) => void;
}

export default function CurrencyTag({ currency, removeCurrency }: CurrencyTag) {
  return (
    <div
      key={currency.id}
      data-testid={`${currency.name}-tag`}
      className="relative flex w-36 items-center justify-center gap-2 rounded-full border-gray-200 bg-gray-100 p-2"
    >
      <p className="text-2xl">{currency.name}</p>
      <div
        data-testid={`${currency.name}-remove`}
        onClick={() => removeCurrency(currency.id)}
        className="absolute right-0 top-0 flex aspect-square w-6 cursor-pointer items-center justify-center rounded-full bg-gray-200 shadow-md shadow-gray-200/30 transition-all hover:bg-red-500 hover:text-white hover:shadow-red-500/20"
      >
        <i className="ti ti-x text-base"></i>
      </div>
    </div>
  );
}
