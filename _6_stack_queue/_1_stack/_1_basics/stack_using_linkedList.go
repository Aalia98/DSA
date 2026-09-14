package main

import "fmt"

type Node struct {
	data int
	next *Node
}

type Stack struct {
	top  *Node
	size int
}

func (s *Stack) Push(val int) {
	newNode := &Node{
		data: val,
		next: s.top,
	}

	s.top = newNode
	s.size++
}

func (s *Stack) Pop() int {
	if s.top == nil {
		return -1
	}

	val := s.top.data
	s.top = s.top.next
	s.size--

	return val
}

func (s *Stack) Peek() int {
	if s.top == nil {
		return -1
	}

	return s.top.data
}

func (s *Stack) IsEmpty() bool {
	return s.top == nil
}

func (s *Stack) Size() int {
	return s.size
}

func main() {
	stack := Stack{}

	stack.Push(1)
	stack.Push(2)
	stack.Push(3)

	fmt.Println(stack.Peek()) // 3
	fmt.Println(stack.Pop())  // 3
	fmt.Println(stack.Size()) // 2
}