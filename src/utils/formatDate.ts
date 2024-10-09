const formatDate = (dateStr: string) => {
  // Split the input date string (MM.DD.YYYY)
  const [month, day, year] = dateStr.split('.');

  // Create a new Date object using the parsed values
  const date = new Date(`${year}-${month}-${day}`);

  // Format the date into the desired "Month Day, Year" format
  const formattedDate = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return formattedDate;
};

export default formatDate;
