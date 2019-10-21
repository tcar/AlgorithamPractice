/* Write a function that reverses the digits a 32-bit signed integer, x. Assume that the environment can only store integers within the 32-bit signed integer range, [-2^31, 2^31 - 1]. The function returns 0 when the reversed integer overflows.

Example:
Input: 123
Output: 321
class Solution:
  def reverse(self, x):
    # Fill this in.

print(Solution().reverse(123))
# 321
print(Solution().reverse(2**31))
# 0 */

function reverse(number)
{
    let max
    let result = ""
    let string_num = number.toString()
    if(string_num[0] ==="-")
    {
        max = Math.pow(2,31)
        string_num = string_num.slice(0,string_num.length)
        result = "-"
    }
    else
        max = Math.pow(2, 31) -1
    
    const reverse = Number.parseInt(result + string_num.split("").reverse().join(""))
    
    if(reverse > max)
        return 0

    return reverse
}

console.log(reverse(-231))