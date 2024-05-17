var msg = 'Hello World';
console.log(msg);

function calculateDaysBetweenDates(date1, date2) {
    const oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds
    const firstDate = new Date(date1);
    const secondDate = new Date(date2);
    const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
    return diffDays;
}

const date1 = new Date('2024-01-01');
const date2 = new Date('2024-01-10');
const daysBetweenDates = calculateDaysBetweenDates(date1, date2);
console.log(daysBetweenDates);