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