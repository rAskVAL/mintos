import { fireEvent, render, screen } from "@testing-library/react";
import CurrencySelector from "./CurrencySelector";
import { currencies } from "../../Constants";

describe("Currency Selector Testing", () => {
  it("Currency selector is properly rendered", () => {
    render(<CurrencySelector />);
    const currencySelector = screen.queryByTestId("CurrencyComponent");
    expect(currencySelector).toBeInTheDocument();
  });

  it("When currency button was clicked, selected currency was displayed on the screen", () => {
    render(<CurrencySelector />);
    const currencyButton = screen.getByTestId(currencies[0] + "-btn");

    fireEvent.click(currencyButton);
    expect(screen.getByTestId(currencies[0] + "-tag")).toBeInTheDocument();
  });

  it("When currency button was clicked second time, selected currency was removed from the screen", () => {
    render(<CurrencySelector />);
    const currencyButton = screen.getByTestId(currencies[0] + "-btn");

    fireEvent.click(currencyButton);
    fireEvent.click(currencyButton);
    expect(
      screen.queryByTestId(currencies[0] + "-tag"),
    ).not.toBeInTheDocument();
  });

  it("When user clicked on delete icon next to currency tag, selected currency should be removed from the screen", () => {
    render(<CurrencySelector />);
    const currencyButton = screen.getByTestId(currencies[0] + "-btn");
    fireEvent.click(currencyButton);
    const deleteTagButton = screen.getByTestId(currencies[0] + "-remove");
    fireEvent.click(deleteTagButton);
    expect(
      screen.queryByTestId(currencies[0] + "-tag"),
    ).not.toBeInTheDocument();
  });
});
