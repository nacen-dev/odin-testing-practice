export const analyzeArray = (array) => {
  const average = (array) => {
    return (
      array.reduce((accumulator, item) => accumulator + item) / array.length
    );
  };

  const min = (array) => {
    return Math.min(...array);
  };

  const max = (array) => {
    return Math.max(...array);
  };

  return {
    length: array.length,
    average: average(array),
    min: min(array),
    max: max(array),
  };
};
