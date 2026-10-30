// https://takeuforward.org/practice/dsa/linear-search

package main

import "fmt"

func linearSearch(nums []int, target int) int {

	if len(nums) == 0 {
		return -1
	}
    
	for i, num := range nums {
		if num == target {
			return i
		}
	}

	return -1
}

func main()  {
	// Example 1:
	nums1 := []int{2, 3, 4, 5, 3}
	target1 := 3

	fmt.Println(linearSearch(nums1, target1))

	// Example 2:
	nums2 := []int{2, -4, 4, 0, 10}
	target2 := 6
	
	fmt.Println(linearSearch(nums2, target2))
}

// Time Complexity - O(n)
// Space Complexity - O(1)