import { scenarios } from "@/core/use-cases/__data__";

import { buildTree } from "./build-tree";

describe("buildTree", () => {
  const accounts = scenarios.stubs.accounts;


  it("should correctly build a tree from a flat list of accounts", () => {
    const result = buildTree(accounts);

    expect(result).toBeInstanceOf(Array);
    expect(result[0].hasParent).toBeFalsy();
    expect(result[0].children).toBeInstanceOf(Array);
  });

  it("should correctly assign parent and children accounts", () => {
    const result = buildTree(accounts);

    expect(result[0].children?.[0].parent).toBe(result[0]);
    expect(result[0].children?.[0].hasParent).toBeTruthy();
    expect(result[0].hasChildren).toBeTruthy();
  });
});