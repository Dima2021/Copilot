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

function calculateTimeBetweenDates(date1, date2) {
    const diffInMilliseconds = Math.abs(date2 - date1);
    const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));
    
    return diffInDays;
}


