var msg = 'Hello World';
console.log(msg);

function calculateDaysBetweenDates(begin, end) {
    const millisecondsInDay = 86400000;
    const beginDate = new Date(begin);
    const endDate = new Date(end);
    const difference = endDate - beginDate;
    return Math.round(difference / millisecondsInDay);
}