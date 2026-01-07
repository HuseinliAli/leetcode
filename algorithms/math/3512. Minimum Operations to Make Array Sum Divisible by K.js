/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    let sumOfTheNums = 0;
    for(let i = 0; i < nums.length; i++){
        sumOfTheNums += nums[i]; 
    }
    let counter = 0;
    while(sumOfTheNums%k != 0){
        counter++;
        sumOfTheNums--;
    }
    return counter;
};