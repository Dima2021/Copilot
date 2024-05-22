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


function calculateDaysBetweenDates(date1, date2) {
    const diffInMilliseconds = Math.abs(date2 - date1);
    const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));
    
    return diffInDays;
}

const startDate = new Date('2022-01-01');
const endDate = new Date('2022-12-31');

const daysBetweenDates = calculateDaysBetweenDates(startDate, endDate);
console.log(`Days between dates: ${daysBetweenDates}`);