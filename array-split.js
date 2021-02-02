const nums = [1, 2, 3, 4, 5, 6, 7, 8]
// const half = nums.slice(2, 5);
const remove = nums.splice(2, 5, 71);
 console.log(remove);
 console.log(nums);

 const together = nums.join(" , ");
 console.log(together);
