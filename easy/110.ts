// 110. Balanced Binary Tree
// https://leetcode.com/problems/balanced-binary-tree/description

class TreeNode {
	val: number;
	left: TreeNode | null;
	right: TreeNode | null;
	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = val === undefined ? 0 : val;
		this.left = left === undefined ? null : left;
		this.right = right === undefined ? null : right;
	}
}

function dfs(root: TreeNode | null): [boolean, number] {
	if (root === null) return [true, 0];

	const left = dfs(root.left);
	const right = dfs(root.right);

	const balanced = left[0] && right[0] && Math.abs(left[1] - right[1]) <= 1;

	return [balanced, Math.max(left[1], right[1]) + 1];
}

function isBalanced(root: TreeNode | null): boolean {
	return dfs(root)[0];
}
