/* Given a list of integers, return the bounds of the minimum range that must be sorted so that the whole list would be sorted.

Example:
Input: [1, 7, 9, 5, 7, 8, 10]
Output: (1, 5)
Explanation:
The numbers between index 1 and 5 are out of order and need to be sorted.

Here's your starting point:

def findRange(nums):
  # Fill this in.

print findRange([1, 7, 9, 5, 7, 8, 10])
# (1, 5) */


function findRange(nums)
{
    let min
    let max
    for(let i = 0; i<nums.length; i++)
    {
        let arr = nums.slice(i, nums.length)
        let minimum = Math.min(...arr)
        if(minimum !== nums[i])
        {
            min = i
            break
        }
    }

    for(let i = nums.length - 1; i>0 ; i--)
    {
        let arr = nums.slice(0, i + 1)
        let maximum = Math.max(...arr)
        if(maximum !== nums[i])
        {
            max = i
            break
        }
    }
    return [min, max]
}

console.log(findRange([1, 7, 9, 5, 7, 8, 10]))