## Binary Search Algorithm

- Binary search is a search algorithm that finds the position of a target value within a sorted array.

### Description

- Binary search compares the target value to the middle element of the array. If they are not equal, the half in which the target cannot lie is eliminated and the search continues on the remaining half, again taking the middle element to compare to the target value, and repeating this until the target value is found.

- If the search ends with the remaining half being empty, the target is not in the array.

### Complexity

- Time complexity: O(log n)
- Space complexity: O(1)

### Example with GIF

![Binary Search](https://d18l82el6cdm1i.cloudfront.net/uploads/bePceUMnSG-binary_search_gif.gif)

> Source: [Brilliant](https://brilliant.org/wiki/binary-search/)
