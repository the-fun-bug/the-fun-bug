const getNewsParam = (newsTitle: string) => {
  return newsTitle
    .toLowerCase() // Convert to lowercase
    .replace(/[’']/g, '') // Remove apostrophes
    .replace(/\s+/g, '-') // Replace spaces with dashes
    .replace(/[^a-z0-9-]/g, ''); // Remove any character that is not a letter, number, or dash
};

export default getNewsParam;
