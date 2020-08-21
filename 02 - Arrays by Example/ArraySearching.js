let sampleSortedArray = [];
let sampleArrayLength = 9444123//Number.MAX_SAFE_INTEGER;
let numberToSearchFor = 15442;

for (let i = 0; i < sampleArrayLength; i++) {
    sampleSortedArray[i] = i*2;
}
let start;
let res;
let end;
let time;

console.log('Array Size: ' + sampleArrayLength);
console.log('Search for: ' + numberToSearchFor);
if (sampleArrayLength <= 12) {console.log(sampleSortedArray)};

// Binary Search
start = new Date().getTime();
res = BinarySearch(sampleSortedArray, numberToSearchFor);
end = new Date().getTime();
time = end - start;

PrintHelper(res, 'Binary Search', time, sampleSortedArray[res]);

// Iteration
start = new Date().getTime();
res = OldFashionIteration(sampleSortedArray, numberToSearchFor);
end = new Date().getTime();
time = end - start;

PrintHelper(res, 'Iteration', time, sampleSortedArray[res]);

function OldFashionIteration(dataArray, numberToSearchFor){

    for (let index = 0; index < dataArray.length; index++) {
        if(numberToSearchFor === dataArray[index]){
            return index;
        }
    }
    return -1;
}

function BinarySearch(dataArray, numberToSearchFor) {

    let min = 0;
    let max = dataArray.length;
    
    while (min <= max) {
        
        let middle = Math.floor((min + max) / 2);

        if(numberToSearchFor === dataArray[middle]) {
            // we found it
            return middle;
        }
        
        if(numberToSearchFor < dataArray[middle]) {
            // go left
            max = middle -1;
        } 
        
        if(numberToSearchFor > dataArray[middle]) {
            // go right
            min = middle + 1;
        }
    }
    return -1;
}

function PrintHelper(result, algorithm, timespent, value){

    var printInfo = '';

    if (result == -1){
        printInfo = algorithm + ' did not find it.';
    } else {
        printInfo = algorithm + ' found it at position ' + res + ' with the value of ' + value + ''; 
    }

    printInfo = printInfo + ' in ' + timespent + ' milliseconds.';

    console.log(printInfo);

}