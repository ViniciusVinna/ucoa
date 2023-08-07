/**
 * Flatten tree
 *
 */

export function flattenTree(tree: AccountEntity[]): AccountEntity[] {
  return tree.flatMap((node) => [
    node,
    ...(
      node.children
        ? flattenTree(node.children)
        : []
    )
  ]);
}