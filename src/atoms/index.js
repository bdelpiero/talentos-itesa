import { atom } from "recoil";

export const userName = atom({
  key: "userName", // unique ID (with respect to other atoms/selectors)
  default: "Jane", // default value (aka initial value)
});
