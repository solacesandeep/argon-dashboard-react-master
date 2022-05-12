// // import { render, screen } from "@testing-library/react";
// import {  render, screen } from "@testing-library/react"
// import '@testing-library/jest-dom'

// import index from "../index"
// import Login from "../components/../views/examples/Login"

// describe("Welcome!", () => {
//   test("Use these awesome create new account in", () => {
//     const component = render(<index />);
//     const linkElement = component.getByText(/This is React Testing /i);
//     expect(linkElement).toBeInTheDocument();
//   });
//   test("render login component in doucment", () => {
//     const { getByLabelText } = render(<Login />);
//     const childElement = getByLabelText("Email");
//     expect(childElement).toBeTruthy();
//   });
// });


import { render, screen } from "@testing-library/react";
import App from "./App";
import Login from "./components/Login";

describe("Test the App Component", () => {
  test("header renders with react testing tutorial in the document", () => {
    const component = render(<App />);
    const linkElement = component.getByText(/This is React Testing Tutorial/i);
    expect(linkElement).toBeInTheDocument();
  });
  test("render login component in doucment", () => {
    const { getByLabelText } = render(<App />);
    const childElement = getByLabelText("Email");
    expect(childElement).toBeTruthy();
  });
});