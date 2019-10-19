/* You are the manager of a number of employees who all sit in a row. The CEO would like to give bonuses to all of your employees, but since the company did not perform so well this year the CEO would like to keep the bonuses to a minimum.

The rules of giving bonuses is that:
- Each employee begins with a bonus factor of 1x.
- For each employee, if they perform better than the person sitting next to them, the employee is given +1 higher bonus (and up to +2 if they perform better than both people to their sides).

Given a list of employee's performance, find the bonuses each employee should get.

Example:
Input: [1, 2, 3, 2, 3, 5, 1]
Output: [1, 2, 3, 1, 2, 3, 1]
Here's your starting point:

def getBonuses(performance):
  # Fill this in.

print getBonuses([1, 2, 3, 2, 3, 5, 1])
# [1, 2, 3, 1, 2, 3, 1] */

function getBonuses(employees){
    const bonuses = []
    for (let i = 0; i<employees.length; i++)
    {
        let bonus = 1
        const employee = employees[i]
        const next_employee = employees[i + 1]
        const before_employee = employees[i - 1]
        
        if(employee > next_employee)
            bonus += 1

        if(employee > before_employee)
            bonus += 1
        bonuses.push(bonus)
    }

    return bonuses
}

console.log(getBonuses([1, 2, 3, 2, 3, 5, 1]))