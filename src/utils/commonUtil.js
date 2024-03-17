import moment from 'moment';

const sum = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') return 'wrong arguments';
  return a + b;
};

function formatDateToDayMonth(dateString) {
  const date = new Date(dateString);

  const options = {weekday: 'short', day: 'numeric', month: 'short'};

  const formattedDate = date.toLocaleDateString('en-US', options);

  return formattedDate;
}

function getTimeDifference(start, end) {
  const startTime = moment(start);
  const endTime = moment(end);

  const diffInMinutes = endTime.diff(startTime, 'minutes');

  const hours = Math.floor(diffInMinutes) / 60;
  const minutes = diffInMinutes % 60;

  return `${hours}h ${minutes}m`;
}

export {sum, formatDateToDayMonth, getTimeDifference};
