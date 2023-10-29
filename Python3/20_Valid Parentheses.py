"""
20. Valid Parentheses

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.


"""


# Approach 1 -- Time complexity : O(n), Space Complexity: O(n)
class Solution:
    def isValid(self, s: str) -> bool:
        dict = {")": "(", "}": "{", "]": "["}

        stack = []

        if len(s) > 0:
            for val in s:
                if stack and val in dict and stack[-1] == dict[val]:
                    stack.pop()
                else:
                    stack.append(val)
            
        return len(stack) == 0 