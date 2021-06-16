import React from 'react';
import { render } from '@testing-library/react';
import { AppProvider } from "./context";
import App from "./App";

const AllTheProviders = ({ children }) => {
  return (
    <AppProvider>
      <App>{children}</App>
    </AppProvider>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";

export { customRender as render };