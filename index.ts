const BiTree = require("./tree.json");

interface TreeNode<T=any> {
   left?: TreeNode;
   right?: TreeNode;
   value: T;
}

const tree = JSON.parse(JSON.stringify(BiTree));

function treeDepth(root: TreeNode): number {
   function maxDepthHandler(root: TreeNode | undefined, num: number): number {
      if (root === undefined) {
         return 0;
      }

      if (root.right === undefined && root.left === undefined) {
         return num;
      }
      
      if (root.right && root.left) {
         return Math.max(maxDepthHandler(root.right, num + 1), maxDepthHandler(root.left, num + 1));
      }  else if (root.right !== undefined) {
         return maxDepthHandler(root.right, num + 1);
      } else {
         return maxDepthHandler(root.left, num + 1);
      }
   };

   return maxDepthHandler(root, 0)
}

console.log(treeDepth(tree));