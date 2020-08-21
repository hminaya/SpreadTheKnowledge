let sampleArray = [];
let sampleArrayLength = 200;
let countDepth = 0;

for (let i = 0; i < sampleArrayLength; i++) {
    sampleArray[i] = Math.floor(Math.random() * 1000);
}

if(sampleArrayLength <= 12){    
    console.log(sampleArray);
}

let start = new Date().getTime();

BubbleSort(sampleArray);

let end = new Date().getTime();
let time = (end - start) /100;

if(sampleArrayLength <= 12){    
    console.log(sampleArray);
}

console.log('Sorted ' + sampleArray.length + ' elements in ' + time + ' seconds. ' + countDepth + ' levels of recursion.');

function BubbleSort(dataArray) {

    let doThisAgain = false;
    let limit = dataArray.length;
    for (let index = 0; index < limit; index++) {
        
        let thisValue = dataArray[index];
        let nextValue = dataArray[index + 1];

        if(nextValue < thisValue) {

            // If the next value is less than the current
            // value we need to switch places
            dataArray[index] = nextValue;
            dataArray[index + 1] = thisValue;
            doThisAgain = true;

        }
        if(doThisAgain) {
            countDepth = countDepth + 1;
            return BubbleSort(dataArray);
        }
    }
    return dataArray;
}