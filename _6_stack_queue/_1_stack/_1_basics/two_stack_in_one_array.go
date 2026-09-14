package main

import "fmt"

type TwoStacks struct {
	arr  []int
	top1 int
	top2 int
}

func NewTwoStacks(size int) *TwoStacks {
	return &TwoStacks{
		arr:  make([]int, size),
		top1: -1,
		top2: size,
	}
}

func (t *TwoStacks) Push1(val int) {
	if t.top1+1 == t.top2 {
		fmt.Println("Overflow")
		return
	}

	t.top1++
	t.arr[t.top1] = val
}

func (t *TwoStacks) Push2(val int) {
	if t.top1+1 == t.top2 {
		fmt.Println("Overflow")
		return
	}

	t.top2--
	t.arr[t.top2] = val
}

func (t *TwoStacks) Pop1() int {
	if t.top1 == -1 {
		return -1
	}

	val := t.arr[t.top1]
	t.top1--

	return val
}

func (t *TwoStacks) Pop2() int {
	if t.top2 == len(t.arr) {
		return -1
	}

	val := t.arr[t.top2]
	t.top2++

	return val
}