const getFullCatName = (category: string) => {
  switch (category) {
    case 'updates':
      return 'The Fun Bug Updates';
    case 'calendar':
      return 'Monthly Calendar';
    case 'specialties':
      return 'Seasonal Specialties';
  }
};

export default getFullCatName;
