 const sum = (a,b) =>{
    if(typeof a!=='number' || typeof b!=='number') 
    return "wrong arguments"
    return a+b;
  }

  function formatDateToDayMonth(dateString) {
  // Create a Date object from the date string
  const date = new Date(dateString);

  // Define options for toLocaleDateString
  const options = { weekday: 'short', day: 'numeric', month: 'short' };

  // Format the date using the specified options and 'en-US' locale
  const formattedDate = date.toLocaleDateString('en-US', options);

  // Return the formatted date
  return formattedDate;
}

  export {sum,formatDateToDayMonth};