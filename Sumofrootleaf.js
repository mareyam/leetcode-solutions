Problem statement:
https://leetcode.com/problems/sum-root-to-leaf-numbers/?envType=daily-question&envId=2024-04-15


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
//  */
var sum = 0;
var sumNumbers = function(root) {
    if (root === null) {
        return 0; // Return 0 if the node is null
    }

    // Check if it's a leaf node
    if (root.left === null && root.right === null) {
        return root.val; // Return the value of the leaf node
    }

    // Recursively calculate the sum for left and right subtrees
    const leftSum = sumNumbers(root.left);
    const rightSum = sumNumbers(root.right);

    // Combine the sums from left and right subtrees
    return (leftSum + rightSum) * 10 + root.val;
};

