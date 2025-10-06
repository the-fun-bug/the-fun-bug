const getFullCatName = (category: string) => {
  switch (category) {
    case 'updates':
      return 'The Fun Bug Updates';
    case 'calendar':
      return 'Monthly Calendar';
  }
};

export default getFullCatName;
