import App from "../App";
import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

describe("App", () => {
  test("renders App component", () => {
    render(
      <Router>
        <App />
      </Router>
    );
    screen.getByText("Feature Clothing Store");
  });
});
