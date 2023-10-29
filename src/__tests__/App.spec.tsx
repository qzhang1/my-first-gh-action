import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import App from "../App";

test("demo", () => {
  expect(true).toEqual(true);
});

test("Renders the App Component", () => {
  render(<App />);
  expect(true).toBeTruthy();
});
