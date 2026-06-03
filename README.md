# Advent of Code 2024 - Day 1: Historian Hysteria
# Part 1
## Problem Constraints
Pair up the smallest number in the left list with the smallest number in the right list, then the second-smallest left number with the second-smallest right number, and so on.

For example two lists can be:

3   4
4   3
2   5
1   3
3   9
3   3

## Design Decisions
- Initial thoughts is that we can parse each line and push each number into a separate array based on even or odd index and then sort the arrays.

# Part 2
Calculate a total similarity score by adding up each number in the left list after multiplying it by the number of times that number appears in the right list.

For these example lists, here is the process of finding the similarity score:

The first number in the left list is 3. It appears in the right list three times, so the similarity score increases by 3 * 3 = 9.
The second number in the left list is 4. It appears in the right list once, so the similarity score increases by 4 * 1 = 4.
The third number in the left list is 2. It does not appear in the right list, so the similarity score does not increase (2 * 0 = 0).
The fourth number, 1, also does not appear in the right list.
The fifth number, 3, appears in the right list three times; the similarity score increases by 9.
The last number, 3, appears in the right list three times; the similarity score again increases by 9.
So, for these example lists, the similarity score at the end of this process is 31 (9 + 4 + 0 + 0 + 9 + 9).

## Design Decisions
## Complexity
### Part 1
- Time complexity: **O(n * nlogn)** since we are using the built in sort function and we must always pass through the size of list to begin with

### Part 2
- Time complexity: **O(n))** since we are no longer sorting the arrays and we only need to pass through the list twice - once to create our array and build a frequency map and then a second time to iterate through out list.

## Lessons learned

## Problem Link
The core problem and information can be found at: https://adventofcode.com/2024/day/1

## Installation
To run this repo simply clone it down to your machine.

Then run:
`npm install`

Next to initiate the testing run:
`npm test`