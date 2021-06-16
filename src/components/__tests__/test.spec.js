import React from "react";
import { render } from "../../test-utils";
import App from "../../App";

const renderComponent = () => {
  return render(<App />);
};

test("check the header should display", () => {
  const { queryByText } = renderComponent();
  expect(queryByText(/Anime List/i)).not.toBeNull();
});

test("check for the first page buttons", async () => {
  const { findByText } = renderComponent();
  const buttons = await findByText("1");

  expect(buttons).not.toBeNull();
});

test("check to see if searchbar is displayed", async () => {
  const { queryByAltText } = renderComponent();
  expect(queryByAltText(/searchbar/i)).not.toBeNull();
});
