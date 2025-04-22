import {  expect, it } from "vitest";
import { add } from ".";

it("adding 5 + 2 should return 7" , () => {
    expect(add(5,2)).toBe(7);
})
