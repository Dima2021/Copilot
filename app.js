var msg = 'Hello World';
console.log(msg);

function calculateTimeBetweenDates(date1, date2) {
    const diffInMilliseconds = Math.abs(date2 - date1);
    const diffInSeconds = Math.floor(diffInMilliseconds / 1000);
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);
    
    return {
        milliseconds: diffInMilliseconds,
        seconds: diffInSeconds,
        minutes: diffInMinutes,
        hours: diffInHours,
        days: diffInDays
    };
}

function calculateDistanceBetween2Points(point1, point2) {
    const xDiff = point2.x - point1.x;
    const yDiff = point2.y - point1.y;
    const distance = Math.sqrt(xDiff ** 2 + yDiff ** 2);
    return distance;
}

function bubbleSort(arr) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; // Swap using destructuring assignment
                swapped = true;
            }
        }
    } while (swapped);
    return arr;
}

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}


function QuickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...QuickSort(left), pivot, ...QuickSort(right)];
}

function RadixSort(arr) {
    const maxNum = Math.max(...arr);
    let divisor = 1;
    while (divisor < maxNum) {
        let buckets = Array.from({ length: 10 }, () => []);
        for (let num of arr) {
            buckets[Math.floor((num / divisor) % 10)].push(num);
        }
        arr = [].concat(...buckets);
        divisor *= 10;
    }
    return arr;
}
