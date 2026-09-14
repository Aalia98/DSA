package main

import "fmt"

type Stack struct {
	items []int
}

func (s *Stack) Push(val int) {
	s.items = append(s.items, val)
}

func (s *Stack) Pop() int {
	if len(s.items) == 0 {
		return -1
	}

	lastIndex := len(s.items) - 1
	val := s.items[lastIndex]

	s.items = s.items[:lastIndex]

	return val
}

func (s *Stack) Peek() int {
	if len(s.items) == 0 {
		return -1
	}

	return s.items[len(s.items)-1]
}

func (s *Stack) IsEmpty() bool {
	return len(s.items) == 0
}

func (s *Stack) Size() int {
	return len(s.items)
}

func main() {
	stack := Stack{}

	stack.Push(10)
	stack.Push(20)
	stack.Push(30)

	fmt.Println(stack.Peek()) // 30
	fmt.Println(stack.Pop())  // 30
	fmt.Println(stack.Size()) // 2
}