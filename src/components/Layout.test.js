import React from "react";
import { shallow } from "enzyme";
import router from "react-router-dom";
import Layout from "./Layout";

jest.mock("react-router-dom");

const mockedName = "Bedu";
const mockedHistoryPush = jest.fn();

beforeAll(() => {
  router.useHistory = jest.fn().mockReturnValue({
    push: mockedHistoryPush,
  });
  // TODO: avoid using global localStorage for testing
  localStorage.setItem("user", JSON.stringify({ name: mockedName }));
});

test("should render layout", () => {
  const wrapper = shallow(<Layout />);
  expect(wrapper.find(".header")).toHaveLength(1);
  const userName = wrapper.find(".user strong");
  expect(userName.text()).toBe(mockedName);
});

test("should render children component", () => {
  const child = <h1>Hola mundo</h1>;
  const wrapper = shallow(<Layout>{child}</Layout>);
  expect(wrapper.contains(child)).toBe(true);
});

test("should open menu when menu icon is clicked", () => {
  const wrapper = shallow(<Layout />);
  expect(wrapper.find(".user-menu")).toHaveLength(0);
  wrapper.find(".user span").simulate("click");
  expect(wrapper.find(".user-menu")).toHaveLength(1);
});

test("should redirect to login when logging out", () => {
  const wrapper = shallow(<Layout />);
  wrapper.find(".user span").simulate("click");
  wrapper.find(".user-menu li").last().simulate("click");
  expect(mockedHistoryPush).toHaveBeenCalledTimes(1);
  expect(mockedHistoryPush).toHaveBeenCalledWith("/login");
});

afterAll(() => {
  localStorage.removeItem("user");
});
