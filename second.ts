const kTreeData = require("./second.json");

interface kTree<T=any> {
   children?: kTree[];
   value?: T
}

const kTreeObj = JSON.parse(JSON.stringify(kTreeData));

function kTreeDepth(root: kTree): number {
   const arrDepth: Array<number> = [];

   function maxDepthHandler(root: kTree, num: number): number {
      if (root === undefined) {
         return 0;
      }

      if (root.children !== undefined) {
         root.children.forEach(child => {
            arrDepth.push(num);

            child.children === undefined
               ? num + 1
               : maxDepthHandler(child, num + 1);
         })
         
         return Math.max(...arrDepth) + 1
      } else {
         return num
      }
   };

   return maxDepthHandler(root, 0);
}

console.log(kTreeDepth(kTreeObj));