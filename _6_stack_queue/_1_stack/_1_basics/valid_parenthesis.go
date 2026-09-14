// https://leetcode.com/problems/valid-parentheses/description/

package main

import "fmt"

func isValid(s string) bool {
	stack := []rune{}

	pairs := map[rune]rune{
		')': '(',
		'}': '{',
		']': '[',
	}

	for _, ch := range s {

		// Opening bracket
		if ch == '(' || ch == '{' || ch == '[' {
			stack = append(stack, ch)
			continue
		}

		// Closing bracket
		if len(stack) == 0 {
			return false
		}

		top := stack[len(stack)-1]

		if top != pairs[ch] {
			return false
		}

		stack = stack[:len(stack)-1]
	}

	return len(stack) == 0
}

func main() {
	fmt.Println(isValid("()"))       // true
	fmt.Println(isValid("()[]{}"))   // true
	fmt.Println(isValid("(]"))       // false
	fmt.Println(isValid("([)]"))     // false
	fmt.Println(isValid("{[]}"))     // true
}