import React from "react";
// import { render } from "@testing-library/react";
import { mount } from "enzyme";
import App from "./App";

// test("renders login page when no user is authenticated", () => {
//   const { getByText } = render(<App />);
//   const loginTitle = getByText(/login/i);
//   expect(loginTitle).toBeInTheDocument();
// });

// test("renders login page when no user is authenticated", () => {
//   const wrapper = mount(<App />);
//   const title = <h2 className="login-title">LOGIN</h2>;
//   expect(wrapper.contains(title)).toBe(true);
// });

const add = (x, y) => {
  const allowedParamTypes = ["number", "string"];
  if (
    !allowedParamTypes.includes(typeof x) ||
    !allowedParamTypes.includes(typeof y)
  ) {
    throw new Error("Not valid params");
  }

  if (typeof x !== "number") {
    x = parseFloat(x);
  }

  if (typeof y !== "number") {
    y = parseFloat(y);
  }

  return x + y;
};

// test("returns the sum of x and y", () => {
//   const actual = add(1, 2);
//   expect(actual).toBe(3);
// });

// test("returns the sum of x and y when one of the params is string", () => {
//   const actual2 = add(1, "2");
//   expect(actual2).toBe(3);
// });

// test("returns the sum of two float numbers", () => {
//   const actual = add(1.2, 2.8);
//   expect(actual).toBe(4.0);
// });

// test("returns the sum of two float numbers when one of the params is string", () => {
//   const actual2 = add("1.2", 2.8);
//   expect(actual2).toBe(4.0);
// });

// test("returns the sum of an integer and a float number", () => {
//   const actual = add(1, 1.6);
//   expect(actual).toBe(2.6);
// });

// test("returns the sum of an integer and a float number", () => {
//   const actual = add("1", "1.9");
//   expect(actual).toBe(2.9);
// });

// test("returns an error when one of the params is not a number or string", () => {
//   expect(() => {
//     add("1", true);
//   }).toThrow(/not valid params/i);
// });
