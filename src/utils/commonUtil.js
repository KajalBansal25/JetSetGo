import moment from 'moment';

const sum = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') return 'wrong arguments';
  return a + b;
};

function formatDateToDayMonth(dateString) {
  // Create a Date object from the date string
  const date = new Date(dateString);

  // Define options for toLocaleDateString
  const options = {weekday: 'short', day: 'numeric', month: 'short'};

  // Format the date using the specified options and 'en-US' locale
  const formattedDate = date.toLocaleDateString('en-US', options);

  // Return the formatted date
  return formattedDate;
}

function getTimeDifference(start, end) {
  // Create moment objects from the provided timestamps
  const startTime = moment(start);
  const endTime = moment(end);

  // Calculate the difference in minutes
  const diffInMinutes = endTime.diff(startTime, 'minutes');

  // Convert total minutes to hours and minutes
  const hours = Math.floor(diffInMinutes) / 60;
  const minutes = diffInMinutes % 60;

  // Return the formatted time difference
  return `${hours}h ${minutes}m`;
}

export {sum, formatDateToDayMonth, getTimeDifference};
