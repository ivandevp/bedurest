import React from "react";
import { shallow } from "enzyme";
import { isLoggedIn } from "./PrivateRoute";

test("returns false when no user is in localStorage", () => {
  expect(isLoggedIn()).toBe(false);
});

test("returns true when user is in localStorage", () => {
  localStorage.setItem("user", JSON.stringify("{}"));
  expect(isLoggedIn()).toBe(true);
  localStorage.removeItem("user");
});
