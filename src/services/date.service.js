export const calculateYearsBetweenDates = (date1, date2) => {
    const diffInMilliseconds = Math.abs(date2 - date1);
    const diffInYears = diffInMilliseconds / 31536000000;
    return diffInYears.toFixed(1);
}
