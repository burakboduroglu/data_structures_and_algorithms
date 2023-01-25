# Description: Selection Sort Algorithm

array = [5, 2, 21, 8, 9, 3, 2, 1, 78, 5, 12, 11, 5, 169, 14, 17, 18, 23]

for i in range(len(array)):
    j = i + 1
    for j in range(len(array)):
        if array[i] < array[j]:
            temp = array[i]
            array[i] = array[j]
            array[j] = temp
print(array)
