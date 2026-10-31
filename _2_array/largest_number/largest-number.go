// https://takeuforward.org/practice/dsa/largest-element

package main

import "fmt"

func largestNumber(nums []int) int {

	maxi := nums[0]

	for i := 1; i < len(nums); i++ {
		if nums[i] > maxi {
			maxi = nums[i]
		}
	}

	return maxi
}

func main()  {
	// Example 1:
	nums1 := []int{3, 3, 6, 1}

	fmt.Println(largestNumber(nums1))

	// Example 2:
	nums2 := []int{3, 3, 0, 99, -40}
	
	fmt.Println(largestNumber(nums2))
}

// Time Complexity - O(n)
// Space Complexity - O(1)