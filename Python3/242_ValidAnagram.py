"""
242. Valid Anagram

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.



"""

from collections import Counter


class Solution:
    # Approach 1
    def isAnagram_v1(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        s_dict = {}
        t_dict = {}

        # creating a dictionary for all characters in string s
        for s_char in s:
            if s_char in s_dict:
                s_dict[s_char] += 1
            else:
                s_dict[s_char] = 1

    
        # creating a dictionary for all characters in string t
        for t_char in t:
            if t_char in t_dict:
                t_dict[t_char] += 1
            else:
                t_dict[t_char] = 1


        return s_dict == t_dict
    

    # Approach 2
    def isAnagram_v2(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        s_dict = {}
        t_dict = {}

    
        # get method in dictionary gives default value specified instead of raising error when key doesn't exist in dictionary
        for index in range(len(s)):
             s_dict[s[index]] = 1 + s_dict.get(s[index], 0) 
             t_dict[t[index]] = 1 + t_dict.get(t[index], 0)


        return s_dict == t_dict
    
    # Approach 3
    def isAnagram_v3(self, s: str, t: str) -> bool:
        return Counter(s) == Counter(t)
    
    # Approach 4
    def isAnagram_v4(self, s: str, t: str) -> bool:
        return sorted(s) == sorted(t)
    
    

          