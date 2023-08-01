// import { scenarios } from "../../__data__";

import { treeStringify } from "./tree-stringify";

type RecursiveObject = {
  a?: number;
  self?: RecursiveObject;
};

type RecursiveArray = (number | RecursiveArray)[];

describe("treeStringify", () => {
  it("should stringify a non-circular object", () => {
    const obj = { a: 1, b: 2, c: { d: 3 } };
    const result = treeStringify(obj);
    expect(result).toBe(JSON.stringify(obj));
  });

  it("should stringify a circular object", () => {
    const obj: RecursiveObject = { a: 1 };
    obj.self = obj;
    const result = treeStringify(obj);
    expect(result).toBe("{\"a\":1}");
  });

  it("should stringify an array with circular references", () => {
    const obj: RecursiveArray = [1, 2, 3];
    obj.push(obj);
    const result = treeStringify(obj);
    expect(result).toBe("[1,2,3,null]");
  });
});