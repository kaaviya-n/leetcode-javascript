
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
 
 var twoSum = function(nums, target) {
    for (let i=0; i<nums.length; i++) {
        let copyNums = [...nums];
        const diff = target - nums[i];
        
        copyNums[i] = null;
        const secondIndex = copyNums.indexOf(diff);
        if (secondIndex > -1) return [i, secondIndex]
    }
};