var msg = 'Hello World';
console.log(msg);

function calculateTimeBetweenDates(date1, date2) => {
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
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j+1]
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}