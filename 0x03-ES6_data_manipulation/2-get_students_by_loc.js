export default function getStudentsByLocation(arr, city) {
    if (!Array.isArray(arr)) {
        return [];
    }

    return arr.filter(arr => arr.location === city);
}