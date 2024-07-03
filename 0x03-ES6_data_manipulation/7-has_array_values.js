export default function hasValuesFromArray(set, arr) {
    if (!Array.isArray(arr)) {
      return false;
    }
  
    return arr.every(value => set.has(value));
  }
  