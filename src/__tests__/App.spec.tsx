import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import App from "../App";

test("demo", () => {
  expect(true).toEqual(true);
});

test("Renders the App Component", () => {
  render(<App />);
  expect(
    screen.getByText("Click on the Vite and React logos to learn more")
  ).toBeInTheDocument();
});

test("Expects count to increase by 1 when counter button is clicked", async () => {
  render(<App />);
  const button = screen.getByRole("button");
  await userEvent.click(button);
  expect(screen.getByText("count is 1")).not.toBeInTheDocument();
});
