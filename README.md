# DSA

Data structures and algorithms practice, organised by topic. The solutions here are written in JavaScript and Go.

Some solutions keep a brute force version first and an optimised version after it, with the LeetCode link in a comment at the top.

## Contents

### Foundations
- [Basics](./_0_basics): small programs on [numbers](./_0_basics/_1_number_programs), [math](./_0_basics/_2_math_programs), [arrays](./_0_basics/_3_array_programs), [strings](./_0_basics/_4_string_programs), [objects](./_0_basics/_6_object_programs), [sets and maps](./_0_basics/_7_set_map_programs) and [linked lists](./_0_basics/_5_linkedList_programs)
- [Language notes](./_1_language): array basics

### Data structures
- [Arrays](./_2_array): including [matrix](./_2_array/matrix) and [subarray](./_2_array/subarray) problems
- [Strings](./_3_string)
- [Linked list](./_5_linked_list): singly and doubly linked lists, reverse, merge, middle node, remove nth from end
- [Stack and queue](./_6_stack_queue): [stack basics](./_6_stack_queue/_1_stack/_1_basics)

### Techniques and algorithms
- [Techniques](./_4_techniques): [hashing](./_4_techniques/_1_hashing), [two pointer](./_4_techniques/_2_twoPointer), [sliding window](./_4_techniques/_3_slidingWindow), [priority queue](./_4_techniques/_4_priority_queue), [prefix sum](./_4_techniques/_5_prefix_sum)
- [Binary search](./_7_binary_search)
- [Sorting](./_8_sorting): [selection sort](./_8_sorting/_1_selection_sort), [bubble sort](./_8_sorting/_2_bubble_sort)
- [Recursion and backtracking](./_9_recursion_and_backtracking): [starter](./_9_recursion_and_backtracking/_1_starter) and [basics](./_9_recursion_and_backtracking/_2_basics)

### Trees, graphs and more
- [Trees](./_10_tree): [BFS](./_10_tree/bfs), [DFS](./_10_tree/dfs)
- [Graphs](./_11_graph): placeholder, no solutions yet
- [Dynamic programming](./_12_dp): [stocks](./_12_dp/stocks)
- [Greedy](./_13_greedy)
- [Maths](./_14_maths)

## Running the code

This repo is a collection of standalone practice files, not one application, so there is no single setup. Many of the JavaScript files run with [Node.js](https://nodejs.org):

```bash
node _8_sorting/_1_selection_sort/sort_array.js
```

Not every file in this repo runs as it is. Some need packages that are not declared in this repo (such as `lodash`), some use browser features (`prompt`, `document`), and some need inputs or are unfinished. The Go files here are snippets without a `package` line, so they are not runnable on their own.
