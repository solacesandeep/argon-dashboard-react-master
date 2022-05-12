import Login, { validateEmail } from "../Login";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


const onSubmit = jest.fn();



describe("Test the Login Component", () => {
  
  test("render the login form submit button on the screen", async () => {
    render(<Login />);
    document.getElementById('app')   //remove this bad me 
    const buttonList = await screen.findAllByRole("button");
    expect(buttonList).toHaveLength(3);
  });


  test("should be failed on email validation ", () => {
    const testEmail = "sandeep.com";
    expect(validateEmail(testEmail)).not.toBe(true);
  });

  // without add byID ↑ own logic

  test("email input field should accept email ", () => {
    render(<Login />);
    document.getElementById('app')  //  stackoverflow ans remove ltr ..
    const email = screen.getByPlaceholderText("Email");
    userEvent.type(email, "sandeep");
    expect(email.value).not.toMatch("sandeep@gmail.com");
  });

// index or app component render 
  test("passport input should have type password ", () => {
    render(<Login />);
    const password = screen.getByPlaceholderText("Password");
    expect(password).toHaveAttribute("type", "password");
  });

  test("should display alert if error", () => {
    render(<Login />);
  
    const email = screen.getByPlaceholderText("Enter email");
    const password = screen.getByPlaceholderText("Password");
    const buttonList = screen.getAllByRole("button");

    userEvent.type(email, "sandeep");
    userEvent.type(password, "12345678");
    userEvent.click(buttonList[0]);
    const error = screen.getByText("Email is not valid");
    expect(error).toBeInTheDocument();
  });

  

  test("should be able to submit the form", () => {
    const component = render(<Login />);
    const email = screen.getByPlaceholderText("Email");
    const password = screen.getByPlaceholderText("Password");
    const btnList = screen.getAllByRole("button");

    userEvent.type(email, "sandeep@gmail.com");
    userEvent.type(password, "12345678");
    userEvent.click(btnList[0]);

    const user = screen.getByText("rohan@gmail.com");
    expect(user).toBeInTheDocument();
  });
});