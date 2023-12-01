import { render } from "@testing-library/react";
import { Provider } from "react-redux";
// As a basic setup, import your same slice reducers
import { store } from "../redux/store";

export function renderWithProviders(ui) {
  return render(<Provider store={store}>{ui}</Provider>);
}
