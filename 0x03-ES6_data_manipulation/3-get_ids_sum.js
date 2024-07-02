export default function getStudentsIdsSum(arr) {
    if (!Array.isArray(arr)) {
        return 0;
    }

    return arr.reduce((acc, arr) => acc + arr.id, 0);
}