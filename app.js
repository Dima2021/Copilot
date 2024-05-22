var msg = 'Hello World';
console.log(msg);


function calculateDaysBetweenDates(date1, date2) {
    var diffInMilliseconds = Math.abs(date2 - date1);
    var days = Math.ceil(diffInMilliseconds / (1000 * 60 * 60 * 24));
    return days;
} 

var startDate = new Date('2022-01-01');
var endDate = new Date('2022-12-31');
console.log(calculateDaysBetweenDates(startDate, endDate));

