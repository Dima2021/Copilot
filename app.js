var msg = 'Hello World';
console.log(msg);


function calculateDaysBetweenDates() {
    var date1 = new Date('2022-01-01');
    var date2 = new Date('2022-12-31');
    var diffInMilliseconds = Math.abs(date2 - date1);
    var days = Math.ceil(diffInMilliseconds / (1000 * 60 * 60 * 24));
    return days;
} 
console.log(calculateDaysBetweenDates());

