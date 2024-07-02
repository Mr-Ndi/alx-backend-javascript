export default function getListStudents(arr) {
    if (!Array.isArray(arr)) {
        return [];
    }

    return arr.map(arr => arr.id);
}