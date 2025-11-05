function mergeSort(array){
    // console.log(array)
    if (array.length <= 1) {
        return array;
    } 
    else {
        let arrayLength = array.length;
        let half = Math.floor(arrayLength/2);
        let leftHalf = array.slice(0, half);
        let rightHalf = array.slice(half, arrayLength);
        // console.log(`leftHalf: ${leftHalf}`)
        // console.log(`rightHalf: ${rightHalf}`)
        let sortedLeft = mergeSort(leftHalf);
        let sortedRight = mergeSort(rightHalf);
        
        let i = 0;
        let j = 0;
        let merged =[]
        
        while ( i < sortedLeft.length && j < sortedRight.length) {
            // console.log(`left length: ${sortedLeft}, i: ${i}`)
            // console.log(`right length: ${sortedRight}, j: ${j}`)
            // console.log(`Merging ${sortedLeft[i]} and ${sortedRight[j]} → ${merged}`);
            if (sortedLeft[i] < sortedRight[j]){
                merged.push(sortedLeft[i]);
                i++;
            } else if (sortedLeft[i] > sortedRight[j])  {
                merged.push(sortedRight[j]);
                j++;
            } else if (sortedLeft[i] == sortedRight[j])  {
                merged.push(sortedLeft[i]);
                i++;
            }
        }
        while (i < sortedLeft.length) {
            merged.push(sortedLeft[i])
            i++
        }
        while (j < sortedRight.length) {
            merged.push(sortedRight[j]);
            j++;
        }
        // console.log(`Merging ${sortedLeft} and ${sortedRight} → ${merged}`);
        return merged;
    }

}


console.log(mergeSort([]))
console.log(mergeSort([73]))
console.log(mergeSort([1, 2, 3, 4, 5]))
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]))
console.log(mergeSort([105, 79, 100, 110]))
